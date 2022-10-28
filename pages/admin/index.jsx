import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/input/Input";
import { adminInputs } from "../../public/data/inputs";
import useInput from "../../hooks/useInput";
import { adminSchema } from "../../schemas/schemas";

const Index = () => {
  const { formik, validatedInputs } = useInput(
    adminInputs,
    adminSchema,
    async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    }
  );

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center justify-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <Title className="text-[2.5rem] mb-6">Admin</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {validatedInputs.map((input) => {
            return (
              <Input
                key={input.id}
                {...input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-y-3 mt-6 w-full">
          <button className="btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
