"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var list_1 = __importDefault(require("../schemas/list"));
exports.default = mongoose_1.model("list", list_1.default);
