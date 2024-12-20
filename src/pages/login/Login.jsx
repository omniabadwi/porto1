import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { LoginValidation } from "../../validations/Valiadtions";
import { useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../../axios/AxiosConfig";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate =useNavigate()
    const loginMutation = useMutation({
        mutationFn: async (values) =>
            await AxiosConfig("api/auth/local", { 

                method: "POST",
                data: values,
            }),
        onSuccess: (data, variables) => { 
            const { identifier } = variables;
            toast.success("Login Success", {
                // style: {
                //    border: "1px solid #A52C45",
                //     padding: "16px",
                //     color: "#A52C45",
                // },
                // iconTheme: {
                //     primary: "#A52C45",
                //     secondary: "#FFFAEE",
                // },
            });
            sessionStorage.setItem("token", data?.data?.data?.token?.plainTextToken);
            sessionStorage.setItem("identifier", identifier);
            console.log(data?.data?.data?.token?.plainTextToken);
            console.log("Identifier:", identifier);
            navigate("/")
            // redirect home page
        },
        onError: (error) => {
            console.log("Error", error.response.data.code);
            if (error.response.data.code == 401) {
                toast.error("Email not Auth", {
                    style: {
                        border: "1px solid #A52C45",
                        padding: "16px",
                        color: "#A52C45",
                    },
                    iconTheme: {
                        primary: "#A52C45",
                        secondary: "#FFFAEE",
                    },
                });
            }
            
        }
    });
    const initialValues = {
        identifier: "",
        password: "",
    };
    const onSubmit = (values) => {
        console.log(values);
        loginMutation.mutate(values);
        console.log(loginMutation.data);
        
    };
    // useEffect(() => {        
    //     if (sessionStorage.getItem("token")) {
    //         navigate("/")
    //     }
    // },[])
    return (
        <>
            <div className="header px">
                <h3>Customer Login</h3>
            </div>
            <div className="login_page px">
                <div className="para">
                    <h6>Registered Customers</h6> 
                <p>If you have an account, sign in with your email address.</p>
</div>
                
            {/* validationSchema={LoginValidation} */}
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={LoginValidation}>
                    <Form>
                        <h6>email</h6>
                        <WrapperInput id={"identifier"} name={"identifier"} isDefault />
                        <h6>password</h6>
                    <WrapperInput id={"password"} name={"password"}  isPassword />
                    <p className="login_footer">
                        Forgot Your Password?<Link to={"/register"}></Link>
                    </p>
                        <Button title={"sign in"} isLoading={loginMutation.isPending ? true : false} />
                        {/* <button type="submit">sign in</button> */}
                        <Button customClick={() => navigate("/register")} title={"create an account"} isLoading={loginMutation.isPending ? true : false} /> 
                </Form>
            </Formik>
        </div>
        </>
        
    );
}
