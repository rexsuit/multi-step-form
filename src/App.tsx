import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TWButton } from "./components/TWButton";
import { TWInput } from "./components/TWInput";

interface IFormInput {
  firstName: string;
  middleName: string;
  lastName: string;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [step, setStep] = useState(0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <TWInput label="First Name" {...register("firstName")} />
        )}
        {step === 1 && (
          <TWInput label="middle name" {...register("middleName")} />
        )}
        {step === 2 && <TWInput label="Last name" {...register("lastName")} />}
        <div className="flex flex-col gap-4">
          <TWButton onClick={() => setStep(step + 1)}>next</TWButton>
          <TWButton onClick={() => setStep(step - 1)}>prev</TWButton>
          <TWButton type="submit">Submit</TWButton>
        </div>
      </form>
    </div>
  );
}
