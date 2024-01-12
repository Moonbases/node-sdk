interface APIResponse {
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
interface UserNewResponse extends APIResponse {}

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
interface UserPinResponse extends APIResponse {}

type UserResetPassword = {
    email: string;
    old_password: string;
    new_password: string;
}
interface UserResetPasswordResponse extends APIResponse {}

type ActivateLicense = {
    email: string
    license: string;
}
interface ActivateLicenseResponse extends APIResponse {}

type CreatePin = {
    email: string;
    password: string;
    pin: number;
}
interface CreatePinResponse extends APIResponse {}

type DeletePin = {
    email: string;
    password: string;
}
interface DeletePinResponse extends APIResponse {}

/**
 * @ADMIN
 */

type CreateProduct = {
    name: string;
    version: string;
    price: number;
}
interface CreateProductResponse extends APIResponse {}

type DeleteProduct = {
    name: string;
}
interface DeleteProductResponse extends APIResponse {}

type EditProduct = {
    name: string;
    new_name: string;
    new_version: string;
    new_price: number;
}
interface EditProductResponse extends APIResponse {}

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
interface DeleteLicenseResponse extends APIResponse {}

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
interface ResetUserHWIDResponse extends APIResponse {}

type ResetUserIP = {
    username: string
}
interface ResetUserIPResponse extends APIResponse {}

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
interface BanUserResponse extends APIResponse {}

type DeleteUser = {
    username: string
}
interface DeleteUserResponse extends APIResponse {}

type BlacklistType = "ip" | "hwid";

type AddBlacklist = {
    type: BlacklistType;
    value: string;
}
interface AddBlacklistResponse extends APIResponse {}

type RemoveBlacklist = {
    type: BlacklistType;
    value: string;
}
interface RemoveBlacklistResponse extends APIResponse {}

type CreateFileLink = {
    file: string;
    /** expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).  Eg: 60, "2 days", "10h", "7d" */
    expire?: string | number;
}
interface CreateFileLinkResponse extends APIResponse {
    status_data: string;
}