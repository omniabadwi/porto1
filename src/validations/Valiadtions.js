import * as Yup from "yup"
export const LoginValidation = Yup.object({
    identifier: Yup.string().email().required("Required"),
    password: Yup.string().min(8).required("Required"),
});

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const registerValidation = Yup.object({
    email: Yup.string().email().required("Required"),
    first_name:Yup.string().min(3).required("Required"),
    last_name: Yup.string().min(3).required("Required"),
   
    password: Yup.string()
        .matches(passwordRules, "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.")
        .required("Password is required"),

    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});