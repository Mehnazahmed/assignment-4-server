"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ["http://localhost:5173"], credentials: true }));
// application routes
app.use("/api/v1", routes_1.default); // /api/v1 will prefix all the route. This is the connection with the index.ts file inside the routes folder.
app.get("/", (req, res) => {
    res.send("Hello from Assignment-4");
});
app.use(globalErrorhandler_1.default); // This is connected with the globalErrorhandler.ts file at the middleware folder.
//Not Found
app.use(notFound_1.default); // This is connected with the notFound.ts file at the middleware folder.
exports.default = app;
