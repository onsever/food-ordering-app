import React from 'react';
import Title from "../../../components/ui/Title";
import Input from "../../../components/input/Input";
import useInput from "../../../hooks/useInput";
import { updatePasswordInputs } from "../../../public/data/inputs";
import { passwordSchema } from "../../../schemas/schemas";

const UpdatePassword = () => {
    const { formik, validatedInputs } = useInput(updatePasswordInputs, passwordSchema, async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Title className="text-[2.5rem] mb-4 md:text-left text-center">Update Password</Title>
            <div className="flex flex-wrap gap-y-4">
                {validatedInputs.map((input) => {
                    return <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                })}
            </div>
            <button type="submit" className="btn-primary mt-4">Update</button>
        </form>
    );
};

export default UpdatePassword;
