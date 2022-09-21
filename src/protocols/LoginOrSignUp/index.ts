export namespace Registration {
  export interface RequestBody {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    is_email_verification: boolean;
    client_id: string;
    source: string;
  }

  export interface Response {
    data: Data;
    message: string;
  }

  export interface Data {
    is_active: boolean;
    id: string;
    first_name: string;
    last_name: string;
    source: string;
    platform_id: string;
    unique_user_code: string;
    source_domain: string;
    UserClients: UserClient[];
    updatedAt: string;
    createdAt: string;
    username: any;
    profile_image_url: any;
    banner_image_url: any;
    country_id: any;
    state_id: any;
    address1: any;
    city: any;
    zip_code: any;
    latitude: any;
    longitude: any;
    title: any;
    gender: any;
    birth_year: any;
    access_key: any;
    secret_key: any;
    dob: any;
    created_at: string;
    updated_at: string;
  }

  export interface UserClient {
    is_online: boolean;
    is_mobile_verified: boolean;
    id: string;
    client_id: string;
    email: string;
    source: string;
    is_parent_client: boolean;
    password: string;
    source_domain: string;
    additional_details: string;
    private_key: string;
    token: string;
    UserClientRoles: UserClientRole[];
    user_id: string;
    category_id: any;
    sub_category_id: any;
    phone_cellular: any;
    verification_code: any;
    country_code: any;
    is_primary: any;
    last_login_ip: any;
    current_login_ip: any;
    current_login_at: any;
    last_login: any;
    is_active: boolean;
    verification_code_expire_at: string;
    created_at: string;
    updated_at: string;
    is_email_verified: boolean;
    email_verified_ip: any;
    phone_verified_ip: any;
    phone_verified_at: any;
    registration_ip: any;
    is_credit_card_verified: boolean;
    is_bank_account_verified: boolean;
    credit_card_verified_ip: any;
    bank_account_verified_ip: any;
    is_bank_account_added: boolean;
    is_credit_card_added: boolean;
    is_applicant: boolean;
    school_id: any;
    bio_details: any;
    socket_id: any;
    external_id: any;
    category_name: any;
    conn_to_another_city_id: any;
    insta_token: any;
    insta_token_update_date: any;
    race: any;
    religion: any;
    department: any;
    account_name: any;
    organisation_phone_no: any;
    designation: any;
  }

  export interface UserClientRole {
    id: string;
    roles_id: string;
    user_clients_id: string;
    updatedAt: string;
    createdAt: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }
}

export namespace Login {
  export interface RequestBody {
    email: string;
    password: string;
    client_id: string;
  }

  export interface Response {
    token: string;
  }
}
