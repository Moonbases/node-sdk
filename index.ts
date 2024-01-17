import axios, { AxiosInstance, AxiosResponse } from "axios";
import endpoints from "./endpoints";

class MoonbaseClient {
  private client: AxiosInstance;
  private readonly api_key: APIKeys;

  constructor(baseURL: string, api_key: APIKeys) {
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

  private async makeRequest<T>({ method, path, data = {} }: RequestOptions): Promise<any> {
    try {
      const isPublicPath = this.isPublicPath(path);
      const headers = {
        Authorization: isPublicPath ? this.api_key.public_api_key : this.api_key.private_api_key,
      };

      return await this.client.request<T>({ method, url: path, data, headers });
    } catch (error) {
      throw new Error(`Failed to ${method} ${path}: ${error}`);
    }
  }

  private isPublicPath(path: string): boolean {
    const publicPaths: string[] = Object.values(endpoints.ACCOUNT_ENDPOINTS).map(endpoint => endpoint.path);
    return publicPaths.includes(path);
  }

  async health(): Promise<APIResponse> {
    return await this.makeRequest<APIResponse>({ method: "get", path: "/api/health" });
  }

  account: Account = {
    userNew: async (data: UserNew): Promise<UserNewResponse> => {
      return await this.makeRequest<UserNewResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.USER_NEW.method,
        path: endpoints.ACCOUNT_ENDPOINTS.USER_NEW.path,
        data,
      })
    },
    user: async (data: User): Promise<UserResponse> => {
      return await this.makeRequest<UserResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.USER.method,
        path: endpoints.ACCOUNT_ENDPOINTS.USER.path,
        data
      })
    },
    userPin: async (data: UserPin): Promise<UserPinResponse> => {
      return await this.makeRequest<UserPinResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.USER_PIN.method,
        path: endpoints.ACCOUNT_ENDPOINTS.USER_PIN.path,
        data
      })
    },
    userResetPassword: async (data: UserResetPassword): Promise<UserResetPasswordResponse> => {
      return await this.makeRequest<UserResetPasswordResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.method,
        path: endpoints.ACCOUNT_ENDPOINTS.USER_RESET_PASSWORD.path,
        data
      })
    },
    activateLicense: async (data: ActivateLicense): Promise<ActivateLicenseResponse> => {
      return await this.makeRequest<ActivateLicenseResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.method,
        path: endpoints.ACCOUNT_ENDPOINTS.ACTIVATE_LICENSE.path,
        data
      })
    },
    createPin: async (data: CreatePin): Promise<CreatePinResponse> => {
      return await this.makeRequest<CreatePinResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.CREATE_PIN.method,
        path: endpoints.ACCOUNT_ENDPOINTS.CREATE_PIN.path,
        data
      });
    },
    deletePin: async (data: DeletePin): Promise<DeletePinResponse> => {
      return await this.makeRequest<DeletePinResponse>({
        method: endpoints.ACCOUNT_ENDPOINTS.DELETE_PIN.method,
        path: endpoints.ACCOUNT_ENDPOINTS.DELETE_PIN.path,
        data
      });
    },
  };

  admin: Admin = {
    createProduct: async (data: CreateProduct): Promise<CreateProductResponse> => {
      return await this.makeRequest<CreateProductResponse>({
        method: endpoints.ADMIN_ENDPOINTS.CREATE_PRODUCT.method,
        path: endpoints.ADMIN_ENDPOINTS.CREATE_PRODUCT.path,
        data
      });
    },
    deleteProduct: async (data: DeleteProduct): Promise<DeleteProductResponse> => {
      return await this.makeRequest<DeleteProductResponse>({
        method: endpoints.ADMIN_ENDPOINTS.DELETE_PRODUCT.method,
        path: endpoints.ADMIN_ENDPOINTS.DELETE_PRODUCT.path,
        data
      });
    },
    editProduct: async (data: EditProduct): Promise<EditProductResponse> => {
      return await this.makeRequest<EditProductResponse>({
        method: endpoints.ADMIN_ENDPOINTS.EDIT_PRODUCT.method,
        path: endpoints.ADMIN_ENDPOINTS.EDIT_PRODUCT.path,
        data
      });
    },
    createLicense: async (data: CreateLicense): Promise<CreateLicenseResponse> => {
      return await this.makeRequest<CreateLicenseResponse>({
        method: endpoints.ADMIN_ENDPOINTS.CREATE_LICENSE.method,
        path: endpoints.ADMIN_ENDPOINTS.CREATE_LICENSE.path,
        data
      });
    },
    deleteLicense: async (data: DeleteLicense): Promise<DeleteLicenseResponse> => {
      return await this.makeRequest<DeleteLicenseResponse>({
        method: endpoints.ADMIN_ENDPOINTS.DELETE_LICENSE.method,
        path: endpoints.ADMIN_ENDPOINTS.DELETE_LICENSE.path,
        data
      });
    },
    getLicenseList: async (): Promise<GetLicenseListResponse[]> => {
      return await this.makeRequest<GetLicenseListResponse[]>({
        method: endpoints.ADMIN_ENDPOINTS.GET_LICENSE_LIST.method,
        path: endpoints.ADMIN_ENDPOINTS.GET_LICENSE_LIST.path
      });
    },
    getLicenseInformation: async (data: GetLicenseInformation): Promise<GetLicenseInformationResponse> => {
      return await this.makeRequest<GetLicenseInformationResponse>({
        method: endpoints.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.method,
        path: endpoints.ADMIN_ENDPOINTS.GET_LICENSE_INFORMATION.path,
        data
      });
    },
    resetLicenseHWID: async (data: ResetUserHWID): Promise<ResetUserHWIDResponse> => {
      return await this.makeRequest<ResetUserHWIDResponse>({
        method: endpoints.ADMIN_ENDPOINTS.RESET_USER_HWID.method,
        path: endpoints.ADMIN_ENDPOINTS.RESET_USER_HWID.path,
        data
      });
    },
    resetLicenseIp: async (data: ResetUserIP): Promise<ResetUserIPResponse> => {
      return await this.makeRequest<ResetUserIPResponse>({
        method: endpoints.ADMIN_ENDPOINTS.RESET_USER_IP.method,
        path: endpoints.ADMIN_ENDPOINTS.RESET_USER_IP.path,
        data
      });
    },
    getUserInformation: async (data: GetUserInformation): Promise<GetUserInformationResponse> => {
      return await this.makeRequest<GetUserInformationResponse>({
        method: endpoints.ADMIN_ENDPOINTS.GET_USER_INFORMATION.method,
        path: endpoints.ADMIN_ENDPOINTS.GET_USER_INFORMATION.path,
        data
      });
    },
    banUser: async (data: BanUser): Promise<BanUserResponse> => {
      return await this.makeRequest<BanUserResponse>({
        method: endpoints.ADMIN_ENDPOINTS.BAN_USER.method,
        path: endpoints.ADMIN_ENDPOINTS.BAN_USER.path,
        data
      });
    },
    deleteUser: async (data: DeleteUser): Promise<DeleteUserResponse> => {
      return await this.makeRequest<DeleteUserResponse>({
        method: endpoints.ADMIN_ENDPOINTS.DELETE_USER.method,
        path: endpoints.ADMIN_ENDPOINTS.DELETE_USER.path,
        data
      });
    },
    addBlacklist: async (data: AddBlacklist): Promise<AddBlacklistResponse> => {
      return await this.makeRequest<AddBlacklistResponse>({
        method: endpoints.ADMIN_ENDPOINTS.ADD_BLACKLIST.method,
        path: endpoints.ADMIN_ENDPOINTS.ADD_BLACKLIST.path,
        data
      });
    },
    removeBlacklist: (data: RemoveBlacklist): Promise<RemoveBlacklistResponse> => {
      return this.makeRequest<RemoveBlacklistResponse>({
        method: endpoints.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.method,
        path: endpoints.ADMIN_ENDPOINTS.REMOVE_BLACKLIST.path,
        data
      });
    },
    createFileLink: (data: CreateFileLink): Promise<CreateFileLinkResponse> => {
      return this.makeRequest<CreateFileLinkResponse>({
        method: endpoints.ADMIN_ENDPOINTS.CREATE_FILE_LINK.method,
        path: endpoints.ADMIN_ENDPOINTS.CREATE_FILE_LINK.path,
        data
      });
    }
  };
}

export = MoonbaseClient;