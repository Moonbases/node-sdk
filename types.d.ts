type HttpMethod = "post" | "get" | "put" | "delete" | "patch";

type APIKeys = {
    public_api_key: string;
    private_api_key?: string;
}

type RequestOptions = {
    method: HttpMethod;
    path: string;
    data?: Record<string, any>;
}

type Account = {
    userNew: (data: UserNew) => Promise<UserNewResponse>;
    user: (data: User) => Promise<UserResponse>;
    userPin: (data: UserPin) => Promise<UserPinResponse>;
    userResetPassword: (data: UserResetPassword) => Promise<UserResetPasswordResponse>;
    activateLicense: (data: ActivateLicense) => Promise<ActivateLicenseResponse>;
    createPin: (data: CreatePin) => Promise<CreatePinResponse>;
    deletePin: (data: DeletePin) => Promise<DeletePinResponse>;
}

type Admin = {
    createProduct: (data: CreateProduct) => Promise<CreateProductResponse>;
    deleteProduct: (data: DeleteProduct) => Promise<DeleteProductResponse>;
    editProduct: (data: EditProduct) => Promise<EditProductResponse>;
    getProductList: () => Promise<GetProductListResponse[]>;
    getProductInformation: (data: GetProductInformation) => Promise<GetProductInformationResponse>;
    createLicense: (data: CreateLicense) => Promise<CreateLicenseResponse>;
    deleteLicense: (data: DeleteLicense) => Promise<DeleteLicenseResponse>;
    getLicenseList: () => Promise<GetLicenseListResponse[]>;
    getLicenseInformation: (data: GetLicenseInformation) => Promise<GetLicenseInformationResponse>;
    resetLicenseHWID: (data: ResetUserHWID) => Promise<ResetUserHWIDResponse>
    resetLicenseIp: (data: ResetUserIP) => Promise<ResetUserIPResponse>
    getUserInformation: (data: GetUserInformation) => Promise<GetUserInformationResponse>
    banUser: (data: BanUser) => Promise<BanUserResponse>
    deleteUser: (data: DeleteUser) => Promise<DeleteUserResponse>
    addBlacklist: (data: AddBlacklist) => Promise<AddBlacklistResponse>
    removeBlacklist: (data: RemoveBlacklist) => Promise<RemoveBlacklistResponse>
    createFileLink: (data: CreateFileLink) => Promise<CreateFileLinkResponse>
}

type APIResponse = {
    status_message: string;
    status_overview: string;
    status_code: number;
}

/**
 * @ACCOUNT
 */

type UserNew = {
    email: string;
    username: string;
    password: string;
    hwid?: string;
    ip?: string;

}
interface UserNewResponse extends APIResponse { }

type User = {
    username: string;
    password: string;
    hwid?: string;
}
interface UserResponse extends APIResponse {
    status_data: {
        user: string,
        jwt: string,
    },
}

type UserPin = {
    email: string;
    pin: number;
}
interface UserPinResponse extends APIResponse { }

type UserResetPassword = {
    email: string;
    old_password: string;
    new_password: string;
}
interface UserResetPasswordResponse extends APIResponse { }

type ActivateLicense = {
    email: string
    license: string;
}
interface ActivateLicenseResponse extends APIResponse { }

type CreatePin = {
    email: string;
    password: string;
    pin: number;
}
interface CreatePinResponse extends APIResponse { }

type DeletePin = {
    email: string;
    password: string;
}
interface DeletePinResponse extends APIResponse { }

/**
 * @ADMIN
 */

type CreateProduct = {
    name: string;
    version: string;
    price: number;
}
interface CreateProductResponse extends APIResponse { }

type DeleteProduct = {
    name: string;
}
interface DeleteProductResponse extends APIResponse { }

type EditProduct = {
    name: string;
    new_name: string;
    new_version: string;
    new_price: number;
}
interface EditProductResponse extends APIResponse { }

interface GetProductListResponse extends APIResponse {
    status_data: {
        name: string;
        version: string;
        price: number;
        total_purchases: number;
    }
}

type GetProductInformation = {
    name: string;
}

interface GetProductInformationResponse extends APIResponse {
    status_data: {
        name: string;
        version: string;
        price: number;
        total_purchases: number;
    }
}

type Expiration = "daily" | "weekly" | "monthly" | "yearly" | "lifetime";

type CreateLicense = {
    product: string;
    expiration: Expiration;
}
interface CreateLicenseResponse extends APIResponse {
    status_data: {
        license: string,
        plan: Expiration,
    }
}

type DeleteLicense = {
    license: string;
}
interface DeleteLicenseResponse extends APIResponse { }

interface GetLicenseListResponse extends APIResponse {
    status_data: {
        product: string,
        license_key: string,
        plan: Expiration,
        activated: boolean
    }
}

type GetLicenseInformation = {
    license: string
}
interface GetLicenseInformationResponse extends APIResponse {
    status_data: {
        product: string,
        license_key: string,
        plan: Expiration,
        activated: boolean
    }
}

type ResetUserHWID = {
    username: string
}
interface ResetUserHWIDResponse extends APIResponse { }

type ResetUserIP = {
    username: string
}
interface ResetUserIPResponse extends APIResponse { }

type GetUserInformation = {
    username: string;
}
interface GetUserInformationResponse extends APIResponse {
    status_data: {
        super: boolean;
        email: string;
        username: string;
        pin: number
        products: {
            name: string;
            expiration_date: string;
        },
        hwid: string;
        ip: string;
        banned: boolean
    }
}

type BanUser = {
    username: string
}
interface BanUserResponse extends APIResponse { }

type DeleteUser = {
    username: string
}
interface DeleteUserResponse extends APIResponse { }

type BlacklistType = "ip" | "hwid";

type AddBlacklist = {
    type: BlacklistType;
    value: string;
}
interface AddBlacklistResponse extends APIResponse { }

type RemoveBlacklist = {
    type: BlacklistType;
    value: string;
}
interface RemoveBlacklistResponse extends APIResponse { }

type CreateFileLink = {
    file: string;
    /** expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).  Eg: 60, "2 days", "10h", "7d" */
    expire?: string | number;
}
interface CreateFileLinkResponse extends APIResponse {
    status_data: string;
}