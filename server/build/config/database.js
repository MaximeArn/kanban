"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
module.exports = function () {
    mongoose_1.connect("" + process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose_1.connection.on("error", function () {
        return console.log("error during connection to database");
    });
    mongoose_1.connection.on("connected", function () { return console.log("connected to database"); });
    mongoose_1.connection.on("disconnected", function () { return console.log("diconnected from database"); });
};
