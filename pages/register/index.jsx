import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/input/Input";
import { registerInputs } from "../../public/data/inputs";
import useInput from "../../hooks/useInput";
import { registerSchema } from "../../schemas/schemas";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const Index = () => {
  const { formik, validatedInputs } = useInput(
    registerInputs,
    registerSchema,
    async (values, actions) => {
      try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);

          if (res.status === 200 || res.status === 201) {
              toast.success("You have successfully registered.");
          }
      } catch (error) {
          toast.error(error.response.data.message);
          console.log(error.response);
      }
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
