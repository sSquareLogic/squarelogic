"use client";

import { FormEvent, useState } from "react";

import CustomInput from "./CustomInput";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const createController = (key: keyof IFormValues) => ({
    value: formValues[key],
    setValue: (value: string) => setFormValues((prev) => ({ ...prev, [key]: value })),
  });
  return (
    <form className="flex flex-col gap-6" onSubmit={(e: FormEvent) => e.preventDefault()}>
      <div className="flex items-center gap-6">
        <CustomInput name="name" id="name" controller={createController("name")} placeholder="Your name" type="text" />
        <CustomInput
          name="email"
          id="email"
          controller={createController("email")}
          placeholder="Your email"
          type="email"
        />
      </div>
      <div>
        <CustomInput
          name="message"
          id="message"
          controller={createController("message")}
          placeholder="Your message"
          isTextArea
        />
      </div>
    </form>
  );
};
export default Form;
