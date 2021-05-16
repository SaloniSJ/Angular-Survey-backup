export class UserLoginModel {
    'emailOrMobile': string
    'password': string
};

export class UserSignUpModel {
    'name': string
    'emailId': string
    'mobileNumber': string
    'countryCode': string
    'dateOfBirth': string
    'gender': string
    'password': string
    'confirmPassword': string
};

export class UserVerifyEmailModel{
    'emailOtp':string
};

export class UserVerifyPhoneModel{
    'mobileNumber':string
};

export class OtpModel{
    'password': string
    'confirmPassword': string
    'id1':string 
    'id2':string 
    'id3':string 
    'id4':string 
    'id5':string  
    
};

export class confirmForgotPasswordModel{
    'password': string
    'confirmPassword': string
    'id1':string 
    'id2':string 
    'id3':string 
    'id4':string 
    'id5':string  
    
};

