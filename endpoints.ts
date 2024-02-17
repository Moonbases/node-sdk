export default class Endpoints {
  static HEALTH_ENDPOINT = {
    method: "get", path: "/api/health"
  } as const;

  static ACCOUNT_ENDPOINTS = {
    USER_NEW: { method: "post", path: "/api/auth/user/new" },
    USER: { method: "post", path: "/api/auth/user" },
    USER_PIN: { method: "post", path: "/api/auth/user/pin" },
    USER_RESET_PASSWORD: { method: "post", path: "/api/auth/user/reset-password" },
    ACTIVATE_LICENSE: { method: "post", path: "/api/user/license/activate" },
    CREATE_PIN: { method: "post", path: "/api/user/pin/create" },
    DELETE_PIN: { method: "delete", path: "/api/user/pin/delete" },
  } as const;

  static ADMIN_ENDPOINTS = {
    CREATE_PRODUCT: { method: "post", path: "/api/admin/product/create" },
    DELETE_PRODUCT: { method: "delete", path: "/api/admin/product/delete" },
    EDIT_PRODUCT: { method: "put", path: "/api/admin/product/edit" },
    GET_PRODUCT_LIST: { method: "get", path: "/api/admin/product/list" },
    GET_PRODUCT_INFORMATION: { method: "get", path: "/api/admin/product/information" },
    CREATE_LICENSE: { method: "post", path: "/api/admin/license/create" },
    DELETE_LICENSE: { method: "delete", path: "/api/admin/license/delete" },
    GET_LICENSE_LIST: { method: "get", path: "/api/admin/license/list" },
    GET_LICENSE_INFORMATION: { method: "get", path: "/api/admin/license/information", },
    RESET_USER_HWID: { method: "post", path: "/api/admin/user/reset-hwid", },
    RESET_USER_IP: { method: "post", path: "/api/admin/user/reset-ip" },
    GET_USER_LIST: { method: "get", path: "/api/admin/user/list" },
    GET_USER_INFORMATION: { method: "get", path: "/api/admin/user/information" },
    BAN_USER: { method: "delete", path: "/api/admin/user/ban" },
    DELETE_USER: { method: "delete", path: "/api/admin/user/delete" },
    ADD_BLACKLIST: { method: "post", path: "/api/admin/blacklist/add" },
    REMOVE_BLACKLIST: { method: "delete", path: "/api/admin/blacklist/remove" },
    UPLOAD_FILE: { method: "post", path: "/api/admin/file/upload" },
    CREATE_FILE_LINK: { method: "post", path: "/api/admin/file/create-link" },
  } as const;
}