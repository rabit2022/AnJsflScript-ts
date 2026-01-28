import { ConsoleTablePrinter } from './tablePrinter';

const c = new ConsoleTablePrinter(2);
c.table([{name: 'Alice', age: 30}], ['name', 'age']);