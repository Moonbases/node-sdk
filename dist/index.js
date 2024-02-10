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
const axios_1 = __importDefault(require("axios"));
const endpoints_1 = __importDefault(require("./endpoints"));
class MoonbaseClient {
    constructor(baseURL, api_key) {
        this.account = {
            userNew: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_NEW.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_NEW.path,
                    data,
                });
            }),
            user: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.USER.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.USER.path,
                    data
                });
            }),
            userPin: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_PIN.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_PIN.path,
                    data
                });
            }),
            userResetPassword: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.path,
                    data
                });
            }),
            activateLicense: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.path,
                    data
                });
            }),
            createPin: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.CREATE_PIN.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.CREATE_PIN.path,
                    data
                });
            }),
            deletePin: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ACCOUNT_ENDPOINTS.DELETE_PIN.method,
                    path: endpoints_1.default.ACCOUNT_ENDPOINTS.DELETE_PIN.path,
                    data
                });
            }),
        };
        this.admin = {
            createProduct: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_PRODUCT.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_PRODUCT.path,
                    data
                });
            }),
            deleteProduct: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_PRODUCT.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_PRODUCT.path,
                    data
                });
            }),
            editProduct: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.EDIT_PRODUCT.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.EDIT_PRODUCT.path,
                    data
                });
            }),
            getProductList: () => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.GET_PRODUCT_LIST.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.GET_PRODUCT_LIST.path
                });
            }),
            getProductInformation: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.GET_PRODUCT_INFORMATION.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.GET_PRODUCT_INFORMATION.path,
                    data
                });
            }),
            createLicense: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_LICENSE.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_LICENSE.path,
                    data
                });
            }),
            deleteLicense: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_LICENSE.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_LICENSE.path,
                    data
                });
            }),
            getLicenseList: () => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.GET_LICENSE_LIST.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.GET_LICENSE_LIST.path
                });
            }),
            getLicenseInformation: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.path,
                    data
                });
            }),
            resetLicenseHWID: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.RESET_USER_HWID.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.RESET_USER_HWID.path,
                    data
                });
            }),
            resetLicenseIp: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.RESET_USER_IP.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.RESET_USER_IP.path,
                    data
                });
            }),
            getUserInformation: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.GET_USER_INFORMATION.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.GET_USER_INFORMATION.path,
                    data
                });
            }),
            banUser: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.BAN_USER.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.BAN_USER.path,
                    data
                });
            }),
            deleteUser: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_USER.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.DELETE_USER.path,
                    data
                });
            }),
            addBlacklist: (data) => __awaiter(this, void 0, void 0, function* () {
                return yield this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.ADD_BLACKLIST.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.ADD_BLACKLIST.path,
                    data
                });
            }),
            removeBlacklist: (data) => {
                return this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.path,
                    data
                });
            },
            createFileLink: (data) => {
                return this.makeRequest({
                    method: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_FILE_LINK.method,
                    path: endpoints_1.default.ADMIN_ENDPOINTS.CREATE_FILE_LINK.path,
                    data
                });
            }
        };
        this.api_key = api_key;
        this.client = axios_1.default.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.client.interceptors.response.use((response) => response.data, (error) => {
            const errorMessage = error.response
                ? error.response.data
                : error.message;
            return console.log(errorMessage);
        });
    }
    makeRequest({ method, path, data = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isPublicPath = this.isPublicPath(path);
                const headers = {
                    Authorization: isPublicPath ? this.api_key.public_api_key : this.api_key.private_api_key,
                };
                return yield this.client.request({ method, url: path, data, headers });
            }
            catch (error) {
                throw new Error(`Failed to ${method} ${path}: ${error}`);
            }
        });
    }
    isPublicPath(path) {
        const publicPaths = Object.values(endpoints_1.default.ACCOUNT_ENDPOINTS).map(endpoint => endpoint.path);
        return publicPaths.includes(path);
    }
    health() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest({ method: endpoints_1.default.HEALTH_ENDPOINT.method, path: endpoints_1.default.HEALTH_ENDPOINT.path });
        });
    }
}
module.exports = MoonbaseClient;
