"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
};
