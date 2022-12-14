import React from "react";

const Input = (props) => {
  const { id, placeholder, error, touched, ...input } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          {...input}
          className={`${
            input.type === "date" ? "pt-0" : "pt-4"
          } h-14 w-full border ${
            touched && error ? "border-danger" : "border-primary"
          } outline-none px-4 peer $`}
          required
        />
        {input.type === "date" ? (
          <></>
        ) : (
          <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
};

export default Input;
