import { ButtonHTMLAttributes } from "react";

export const TWButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
      {...props}
    />
  );
};
