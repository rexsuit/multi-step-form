import React, {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  useState,
} from "react";

export const TWInput = React.forwardRef(
  (
    {
      label,
      className,
      type,
      ...props
    }: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & { label?: string },
    ref: ForwardedRef<any>
  ) => {
    const [name, setName] = useState(crypto.randomUUID());
    return (
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          {label && (
            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <input
            ref={ref}
            type={type || "text"}
            className={`
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          ${className}
          `}
            id={name}
            {...props}
          />
        </div>
      </div>
    );
  }
);
