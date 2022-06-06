"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigs = void 0;
exports.dbConfigs = {
    DATABASE: 'fleetdb',
    USER: 'postgres',
    PASSWORD: 'zeel',
    DB_PORT: 5432,
    DB_HOST: 'localhost',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
};
