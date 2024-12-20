import { Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { registerValidation } from "../../validations/Valiadtions";
import Button from "../../components/button/Button";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosConfig } from "../../axios/AxiosConfig";

export default function RegisterPage() {
  const navigate = useNavigate();
  const registerMutation = useMutation({
    mutationFn: async (values) =>
      await AxiosConfig("api/auth/local/register", {
        method: "POST",
        data: values,
      }),
    onSuccess: (data) => {
      toast.success("Welcome New User", {
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
      sessionStorage.setItem("token", data?.data?.data?.token?.plainTextToken);
      navigate("/");
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
    },
  });
  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    // toggle: false,
    SignUpforNewsletter: false,
    email: "",
    password: "",
    password_confirmation: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    registerMutation.mutate(values);
  };
  return (
    <div className="register_page">
      <div className="header px">
        <h3>Create New Customer Account</h3>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={registerValidation}>
        <Form className="register ">
                  <div className="col1">
                      <h6>Personal Information</h6>
            <div className="name">
              <WrapperInput
                name={"first_name"}
                label={"first name"}
                isDefault
              />
              <WrapperInput
                name={"username"}
                label={"username"}
                isDefault
              />
              <WrapperInput name={"last_name"} label={"last name"} isDefault />
            </div>

            <div className="check">
              <WrapperInput
                type="checkbox"
                name={"SignUpforNewsletter"}
                label={"Sign Up for Newsletter"}
                isCheckbox
              />
            </div>

            <Button
              title={"create an account"}
              isLoading={registerMutation.isPending ? true : false}
            />
          </div>
                  <div className="col2">
                      <h6>Sign-in Information</h6>
            <div className="email">
              <WrapperInput  name={"email"} label={"Email"} isDefault />
            </div>
            <div className="password">
              <WrapperInput name={"password"} label={"Password"} isPassword />
              <p>Password Strength: No Password</p>
            </div>
            <div className="pass2">
              <WrapperInput
                name={"password_confirmation"}
                label={"Confirm Password"}
                isPassword
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
