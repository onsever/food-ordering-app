import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/input/Input";
import { registerInputs } from "../../public/data/inputs";
import useInput from "../../hooks/useInput";
import { registerSchema } from "../../schemas/schemas";
import Link from "next/link";

const Index = () => {
  const { formik, validatedInputs } = useInput(
    registerInputs,
    registerSchema,
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
        <Title className="text-[2.5rem] mb-6">Register</Title>
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
          <button type="submit" className="btn-primary">Register</button>
          <Link href="/login">
            <span className="text-sm underline cursor-pointer text-gray-600">
              Do you have an account? Login.
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
