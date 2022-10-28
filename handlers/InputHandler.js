import { useFormik } from "formik";

export default function InputHandler(inputs, onSubmit) {
  const inputValues = inputs
    .map((input) => {
      return input["name"];
    })
    .map((value) => {
      return { [value]: "" };
    });

  const formik = useFormik({
    initialValues: Object.assign({}, ...inputValues),
    onSubmit: onSubmit,
  });

  return { formik };
}
