export interface ITOAST_ERROR_PAYLOAD {
  error: boolean;
  message: string;
}

export interface IUserData_PAYLOAD {
  account_name?: string;
  admin_type?: string;
  email?: string;
  external_id?: string;
  first_name?: string;
  gender?: number;
  id?: string;
  is_super_owner?: boolean;
  last_name?: string;
  network?: string;
  phone_cellular?: string;
  platform_id?: string;
  profile_image_url?: string;
  race?: string;
  religion?: string;
  role?: string;
  role_id?: string;
  user_id?: string;
  user_name?: string;
  category_id?:string;
}

export interface ILOADER {
  loader?: boolean;
}