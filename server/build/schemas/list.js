"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var task_1 = __importDefault(require("./task"));
exports.default = new mongoose_1.Schema({
    name: String,
    color: { type: String, default: "#ffffff" },
    tasks: [task_1.default],
});
