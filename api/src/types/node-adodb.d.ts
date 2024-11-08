declare module 'node-adodb' {
  export class Connection {
    constructor(connection: string);
    query(sql: string): Promise<any>;
    execute(sql: string): Promise<void>;
  }
  export function open(connection: string): Connection;
}
