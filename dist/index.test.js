"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./"));
const mb = new _1.default("http://localhost:80", {
    public_api_key: "secret",
    private_api_key: "secret" // optional
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const health = yield mb.health();
        if (!health || health.status_code !== 200) {
            return console.log("Health check failed");
        }
    }
    catch (e) {
        console.log(e);
    }
});
main().then(_e => null);
