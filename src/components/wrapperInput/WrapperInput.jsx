import { Field } from "formik";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
export default function WrapperInput({ id,label, name, isPassword, isDefault,isCheckbox  }) {

    return (
        <div className="wrapper_input">
            <label htmlFor={name}>{label}</label>
            {isDefault && <Field id={id} name={name} />}
            {isPassword && <Field id={id}  name={name} type="password" />}
            {isCheckbox &&<Field id={id} type="checkbox" name="SignUpforNewsletter" />}
            
        </div>
    );
}
