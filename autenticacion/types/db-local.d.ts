declare module 'db-local' {
  export default class DB {
    constructor(options: { path: string });
    Schema(name: string, schema: any): any;
  }
} 