"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const sequelize = __importStar(require("sequelize"));
const constants_1 = require("./constants");
exports.dbConfig = new sequelize.Sequelize(constants_1.dbConfigs.DATABASE, constants_1.dbConfigs.USER, constants_1.dbConfigs.PASSWORD, {
    port: constants_1.dbConfigs.DB_PORT,
    host: constants_1.dbConfigs.DB_HOST,
    dialect: 'postgres',
    pool: {
        min: constants_1.dbConfigs.pool.min,
        max: constants_1.dbConfigs.pool.max,
        acquire: constants_1.dbConfigs.pool.acquire,
        idle: constants_1.dbConfigs.pool.idle
    }
});
