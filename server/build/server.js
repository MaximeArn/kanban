"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var cors_1 = __importDefault(require("./config/cors"));
var cors_2 = __importDefault(require("cors"));
var express_1 = __importStar(require("express"));
var lists_1 = __importDefault(require("./routers/lists"));
var tasks_1 = __importDefault(require("./routers/tasks"));
require("./config/database")();
var PORT = process.env.SERVER_PORT || 3000;
var app = express_1.default();
app.use(cors_2.default(cors_1.default));
app.use(express_1.urlencoded({ extended: true }));
app.use(express_1.json());
app.use("/lists", lists_1.default);
app.use("/tasks", tasks_1.default);
app.listen(PORT, function () {
    return console.log("server started on port http://localhost:" + PORT);
});
