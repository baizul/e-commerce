export const PASSWORD_PATTERN =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

export const NAME_REGEX = /^(?![\s-])[a-zA-Z_\s-]+$/;

export const UPPERCASE_PATTERN = /[A-Z]/;

export const LOWERCASE_PATTERN = /[a-z]/;

export const NUMBER_PATTERN = /[0-9]/;

export const SPECIAL_CHAR_PATTERN = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const ZIP_CODE_PATTERN = /(^\d{5}$)|(^\d{5}-\d{4}$)/;