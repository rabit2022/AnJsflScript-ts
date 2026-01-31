// src/storage/fileStore.ts

import fs from 'fs';
import path from 'path';
import { Paths } from '../config/paths';
import { SaveData } from '../types';

export class FileStore {
  /* =======================
   * JSON
   * ======================= */

  readCurrent(): SaveData | null {
    return this.readJson<SaveData>(Paths.currentJson);
  }

  readAll(): SaveData[] {
    return this.readJson<SaveData[]>(Paths.allJson) ?? [];
  }

  writeCurrent(data: SaveData): void {
    this.writeJson(Paths.currentJson, data);
  }

  writeAll(list: SaveData[]): void {
    // 防止无限增长
    const limited = list.slice(-1000);
    this.writeJson(Paths.allJson, limited);
  }

  /* =======================
   * TEXT
   * ======================= */

  writeCurrentText(text: string): void {
    this.ensureDir(Paths.currentText);
    fs.writeFileSync(Paths.currentText, text, 'utf8');
  }

  appendAllText(text: string): void {
    this.ensureDir(Paths.allText);
    fs.appendFileSync(Paths.allText, text + '\n', 'utf8');
  }

  readCurrentText(): string | null {
    return this.readText(Paths.currentText);
  }

  readAllText(): string | null {
    return this.readText(Paths.allText);
  }

  /* =======================
   * COMMON
   * ======================= */

  clear(): void {
    Object.values(Paths).forEach(file => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    });
  }

  /* =======================
   * PRIVATE
   * ======================= */

  private readJson<T>(file: string): T | null {
    if (!fs.existsSync(file)) return null;

    try {
      const content = fs.readFileSync(file, 'utf8');
      return JSON.parse(content) as T;
    } catch {
      return null;
    }
  }

  private writeJson(file: string, data: unknown): void {
    this.ensureDir(file);
    fs.writeFileSync(
      file,
      JSON.stringify(data, null, 2),
      'utf8'
    );
  }

  private readText(file: string): string | null {
    if (!fs.existsSync(file)) return null;

    try {
      return fs.readFileSync(file, 'utf8');
    } catch {
      return null;
    }
  }

  private ensureDir(file: string): void {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
}
