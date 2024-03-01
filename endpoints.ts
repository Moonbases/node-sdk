enum EndpointMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
}

export default class Endpoints {
  static HEALTH_ENDPOINT = {
    method: "get", path: "/api/health"
  } as const;

  static ACCOUNT_ENDPOINTS = {
    USER_NEW: { method: EndpointMethod.Post, path: "/api/auth/user/new" },
    USER: { method: EndpointMethod.Post, path: "/api/auth/user" },
    USER_PIN: { method: EndpointMethod.Post, path: "/api/auth/user/pin" },
    USER_RESET_PASSWORD: { method: EndpointMethod.Post, path: "/api/auth/user/reset-password" },
    ACTIVATE_LICENSE: { method: EndpointMethod.Post, path: "/api/user/license/activate" },
    CREATE_PIN: { method: EndpointMethod.Post, path: "/api/user/pin/create" },
    UPDATE_PIN: { method: EndpointMethod.Put, path: "/api/user/pin/update" },
    DELETE_PIN: { method: EndpointMethod.Delete, path: "/api/user/pin/delete" },
  } as const;

  static ADMIN_ENDPOINTS = {
    CREATE_PRODUCT: { method: EndpointMethod.Post, path: "/api/admin/product/create" },
    DELETE_PRODUCT: { method: EndpointMethod.Delete, path: "/api/admin/product/delete" },
    EDIT_PRODUCT: { method: EndpointMethod.Put, path: "/api/admin/product/edit" },
    GET_PRODUCT_LIST: { method: EndpointMethod.Get, path: "/api/admin/product/list" },
    GET_PRODUCT_INFORMATION: { method: EndpointMethod.Get, path: "/api/admin/product/information" },
    CREATE_LICENSE: { method: EndpointMethod.Post, path: "/api/admin/license/create" },
    DELETE_LICENSE: { method: EndpointMethod.Delete, path: "/api/admin/license/delete" },
    GET_LICENSE_LIST: { method: EndpointMethod.Get, path: "/api/admin/license/list" },
    GET_LICENSE_INFORMATION: { method: EndpointMethod.Get, path: "/api/admin/license/information", },
    RESET_USER_HWID: { method: EndpointMethod.Post, path: "/api/admin/user/reset-hwid", },
    RESET_USER_IP: { method: EndpointMethod.Post, path: "/api/admin/user/reset-ip" },
    GET_USER_LIST: { method: EndpointMethod.Get, path: "/api/admin/user/list" },
    GET_USER_INFORMATION: { method: EndpointMethod.Get, path: "/api/admin/user/information" },
    BAN_USER: { method: EndpointMethod.Delete, path: "/api/admin/user/ban" },
    DELETE_USER: { method: EndpointMethod.Delete, path: "/api/admin/user/delete" },
    ADD_BLACKLIST: { method: EndpointMethod.Post, path: "/api/admin/blacklist/add" },
    REMOVE_BLACKLIST: { method: EndpointMethod.Delete, path: "/api/admin/blacklist/remove" },
    GET_BLACKLIST_LIST: { method: EndpointMethod.Get, path: "/api/admin/blacklist/list" },
    DELETE_FILE: { method: EndpointMethod.Delete, path: "/api/admin/file/delete" },
    GET_FILE_LIST: { method: EndpointMethod.Get, path: "/api/admin/file/list" },
    GET_FILE_LIST_BY_PRODUCT: { method: EndpointMethod.Get, path: "/api/admin/file/list-by-product" },
    UPLOAD_FILE: { method: EndpointMethod.Post, path: "/api/admin/file/upload" },
    CREATE_FILE_LINK: { method: EndpointMethod.Post, path: "/api/admin/file/create-link" },
  } as const;
}