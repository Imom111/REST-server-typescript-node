"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('curso_node', 'testing_curso_node', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map