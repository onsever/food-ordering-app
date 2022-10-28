import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/input/Input";
import { loginInputs } from "../../public/data/inputs";
import useInput from "../../hooks/useInput";
import { loginSchema } from "../../schemas/schemas";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Index = () => {
  const { formik, validatedInputs } = useInput(
    loginInputs,
    loginSchema,
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
        <Title className="text-[2.5rem] mb-6">Login</Title>
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
          <button className="btn-secondary flex items-center justify-center gap-x-2">
            <AiFillGithub /> GitHub
          </button>
          <Link href="/register">
            <span className="text-sm underline cursor-pointer text-gray-600">
              Don&apos;t you have an account? Register.
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
