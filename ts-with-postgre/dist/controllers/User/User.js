"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const CrudController_1 = require("../CrudController");
class UserController extends CrudController_1.CrudController {
    create(req, res) {
        res.status(201).json({ status: true, message: "Create a User", });
    }
    read(req, res) {
        res.json({ message: 'GET /user request received' });
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.UserController = UserController;
