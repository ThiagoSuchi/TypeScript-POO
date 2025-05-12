"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
// Padrão de projeto singleton - Gof | Factory Method - Gof
class Database {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (Database.database) {
            console.log('Retornando instância já criada:');
            return Database.database;
        }
        console.log('Criando nova instância:');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}
exports.Database = Database;
const database1 = Database.getDatabase('localhost', 'thiago', 'thigas123456');
database1.connect();
const database2 = Database.getDatabase('localhost', 'thiago', 'thigas123456');
database2.connect();
