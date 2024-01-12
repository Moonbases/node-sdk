import axios, {AxiosInstance, AxiosResponse} from "axios";
import endpoints from "./endpoints";

type HttpMethod = "post" | "get" | "put" | "delete" | "patch";

type API = {
  public_api_key: string;
  private_api_key?: string;
}

class MoonbaseClient {
  private client: AxiosInstance;
  private readonly baseURL: string;
  private readonly api_key: API;

  constructor(baseURL: string, api_key: API) {
    this.baseURL = baseURL;
    this.api_key = api_key;
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.response.use(
      (response: AxiosResponse<any, any>) => response.data,
      (error) => {
         const errorMessage = error.response
           ? error.response.data
           : error.message;
         return console.log(errorMessage);
      }
    );
  }

  private async makeRequest<T>(
    method: HttpMethod,
    path: string,
    data: Record<string, any> = {},
  ): Promise<any> {
    try {
      const publicPaths: string[] = [
        endpoints.ACCOUNT_ENDPOINTS.USER_NEW.path,
        endpoints.ACCOUNT_ENDPOINTS.USER.path,
        endpoints.ACCOUNT_ENDPOINTS.USER_PIN.path,
        endpoints.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.path,
        endpoints.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.path,
        endpoints.ACCOUNT_ENDPOINTS.CREATE_PIN.path,
        endpoints.ACCOUNT_ENDPOINTS.DELETE_PIN.path,
      ];

      const type: "public" | "private" = publicPaths.includes(path) ? "public" : "private";

      return await this.client.request<T>({
        headers: {
          Authorization: type === "public" ? this.api_key.public_api_key : this.api_key.private_api_key,
        },
        method,
        url: path,
        data,
      });
    } catch (error) {
      throw new Error(`Failed to ${method} ${path}: ${error}`);
    }
  }

  async health(): Promise<APIResponse> {
    return await this.makeRequest<APIResponse>("get", "/api/health");
  }

  account: Account = {
    userNew: async (data: UserNew): Promise<UserNewResponse> => {
      return await this.makeRequest<UserNewResponse>(
          endpoints.ACCOUNT_ENDPOINTS.USER_NEW.method,
          endpoints.ACCOUNT_ENDPOINTS.USER_NEW.path,
          data,
      )
    },
    user: async (data: User): Promise<UserResponse> => {
      return await this.makeRequest<UserResponse>(
          endpoints.ACCOUNT_ENDPOINTS.USER.method,
          endpoints.ACCOUNT_ENDPOINTS.USER.path,
          data
      )
    },
    userPin: async (data: UserPin): Promise<UserPinResponse> => {
      return await this.makeRequest<UserPinResponse>(
          endpoints.ACCOUNT_ENDPOINTS.USER_PIN.method,
          endpoints.ACCOUNT_ENDPOINTS.USER_PIN.path,
          data
      )
    },
    userResetPassword: async (data: UserResetPassword): Promise<UserResetPasswordResponse> => {
      return await this.makeRequest<UserResetPasswordResponse>(
          endpoints.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.method,
          endpoints.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.path,
          data
      )
    },
    activateLicense: async (data: ActivateLicense): Promise<ActivateLicenseResponse> => {
      return await this.makeRequest<ActivateLicenseResponse>(
          endpoints.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.method,
          endpoints.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.path,
          data
      )
    },
    createPin: async (data: CreatePin): Promise<CreatePinResponse> => {
      return await this.makeRequest<CreatePinResponse>(
          endpoints.ACCOUNT_ENDPOINTS.CREATE_PIN.method,
          endpoints.ACCOUNT_ENDPOINTS.CREATE_PIN.path,
          data
      );
    },
    deletePin: async (data: DeletePin): Promise<DeletePinResponse> => {
      return await this.makeRequest<DeletePinResponse>(
          endpoints.ACCOUNT_ENDPOINTS.DELETE_PIN.method,
          endpoints.ACCOUNT_ENDPOINTS.DELETE_PIN.path,
          data
      );
    },
  };

  admin: Admin = {
    createProduct: async (data: CreateProduct): Promise<CreateProductResponse> => {
      return await this.makeRequest<CreateProductResponse>(
        endpoints.ADMIN_ENDPOINTS.CREATE_PRODUCT.method,
        endpoints.ADMIN_ENDPOINTS.CREATE_PRODUCT.path,
        data
      );
    },
    deleteProduct: async (data: DeleteProduct): Promise<DeleteProductResponse> => {
       return await this.makeRequest<DeleteProductResponse>(
        endpoints.ADMIN_ENDPOINTS.DELETE_PRODUCT.method,
        endpoints.ADMIN_ENDPOINTS.DELETE_PRODUCT.path,
        data
      );
    },
    editProduct: async (data: EditProduct): Promise<EditProductResponse> => {
      return await this.makeRequest<EditProductResponse>(
        endpoints.ADMIN_ENDPOINTS.EDIT_PRODUCT.method,
        endpoints.ADMIN_ENDPOINTS.EDIT_PRODUCT.path,
        data
      );
    },
    createLicense: async (data: CreateLicense): Promise<CreateLicenseResponse> => {
      return await this.makeRequest<CreateLicenseResponse>(
        endpoints.ADMIN_ENDPOINTS.CREATE_LICENSE.method,
        endpoints.ADMIN_ENDPOINTS.CREATE_LICENSE.path,
        data
      );
    },
    deleteLicense: async (data: DeleteLicense): Promise<DeleteLicenseResponse> => {
      return await this.makeRequest<DeleteLicenseResponse>(
        endpoints.ADMIN_ENDPOINTS.DELETE_LICENSE.method,
        endpoints.ADMIN_ENDPOINTS.DELETE_LICENSE.path,
        data
      );
    },
    getLicenseList: async (): Promise<GetLicenseListResponse[]> => {
      return await this.makeRequest<GetLicenseListResponse[]>(
          endpoints.ADMIN_ENDPOINTS.GET_LICENSE_LIST.method,
          endpoints.ADMIN_ENDPOINTS.GET_LICENSE_LIST.path
      );
    },
    getLicenseInformation: async (data: GetLicenseInformation): Promise<GetLicenseInformationResponse> => {
      return await this.makeRequest<GetLicenseInformationResponse>(
          endpoints.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.method,
          endpoints.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.path,
          data
      );
    },
    resetLicenseHWID: async (data: ResetUserHWID): Promise<ResetUserHWIDResponse> => {
      return await this.makeRequest<ResetUserHWIDResponse>(
          endpoints.ADMIN_ENDPOINTS.RESET_USER_HWID.method,
          endpoints.ADMIN_ENDPOINTS.RESET_USER_HWID.path,
          data
      );
    },
    resetLicenseIp: async (data: ResetUserIP): Promise<ResetUserIPResponse> => {
      return await this.makeRequest<ResetUserIPResponse>(
          endpoints.ADMIN_ENDPOINTS.RESET_USER_IP.method,
          endpoints.ADMIN_ENDPOINTS.RESET_USER_IP.path,
          data
      );
    },
    getUserInformation: async (data: GetUserInformation): Promise<GetUserInformationResponse> => {
      return await this.makeRequest<GetUserInformationResponse>(
          endpoints.ADMIN_ENDPOINTS.GET_USER_INFORMATION.method,
          endpoints.ADMIN_ENDPOINTS.GET_USER_INFORMATION.path,
          data
      );
    },
    banUser: async (data: BanUser): Promise<BanUserResponse> => {
      return await this.makeRequest<BanUserResponse>(
          endpoints.ADMIN_ENDPOINTS.BAN_USER.method,
          endpoints.ADMIN_ENDPOINTS.BAN_USER.path,
          data
      );
    },
    deleteUser: async (data: DeleteUser): Promise<DeleteUserResponse> => {
      return await this.makeRequest<DeleteUserResponse>(
          endpoints.ADMIN_ENDPOINTS.DELETE_USER.method,
          endpoints.ADMIN_ENDPOINTS.DELETE_USER.path,
          data
      );
    },
    addBlacklist: async (data: AddBlacklist): Promise<AddBlacklistResponse> => {
      return await this.makeRequest<AddBlacklistResponse>(
          endpoints.ADMIN_ENDPOINTS.ADD_BLACKLIST.method,
          endpoints.ADMIN_ENDPOINTS.ADD_BLACKLIST.path,
          data
      );
    },
    removeBlacklist: (data: RemoveBlacklist): Promise<RemoveBlacklistResponse> => {
      return this.makeRequest<RemoveBlacklistResponse>(
          endpoints.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.method,
          endpoints.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.path,
          data
      );
    },
    createFileLink: (data: CreateFileLink): Promise<CreateFileLinkResponse> => {
      return this.makeRequest<CreateFileLinkResponse>(
          endpoints.ADMIN_ENDPOINTS.CREATE_FILE_LINK.method,
          endpoints.ADMIN_ENDPOINTS.CREATE_FILE_LINK.path,
          data
      );
    }
  };
}

export = MoonbaseClient;