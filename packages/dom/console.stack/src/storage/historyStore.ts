import fs from 'fs';
import { SaveData } from '../types';
import { Paths } from '../config/paths';

export class HistoryStore {

  getCurrent(): SaveData | null {
    return this.read<SaveData>(Paths.currentJson);
  }

  getAll(): SaveData[] {
    return this.read<SaveData[]>(Paths.allJson) ?? [];
  }

  save(record: SaveData) {

    fs.writeFileSync(
      Paths.currentJson,
      JSON.stringify(record, null, 2)
    );

    let all = this.getAll();

    const exist = all.find(r =>
      r.message === record.message &&
      JSON.stringify(r.frames) === JSON.stringify(record.frames)
    );

    if (exist) {
      exist.count++;
      exist.timestamp = record.timestamp;
    } else {
      all.push(record);
    }

    fs.writeFileSync(
      Paths.allJson,
      JSON.stringify(all.slice(-1000), null, 2)
    );
  }

  clear() {
    Object.values(Paths).forEach(p => {
      if (fs.existsSync(p)) fs.unlinkSync(p);
    });
  }

  private read<T>(file: string): T | null {
    if (!fs.existsSync(file)) return null;

    try {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
      return null;
    }
  }
}
