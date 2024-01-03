"use client";

import { FormEvent, useRef, useState } from "react";

import AnimatedButton from "../animated/AnimatedButton";
import CustomInput from "./CustomInput";
import emailjs from "@emailjs/browser";

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

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "";
    const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "";
    const public_key = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "";

    if (!formRef.current) return;
    return await emailjs.sendForm(service_id, template_id, formRef.current, public_key);
  };
  return (
    <form
      ref={formRef}
      className="flex flex-col gap-6"
      onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        console.log(await onSubmit());
      }}
    >
      <div className="flex items-center gap-6 max-sm:flex-col">
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
      <input type="text" name="submitted_time" id="submitted_time" hidden value={new Date().toLocaleString()} />
      <div className="pt-4">
        <AnimatedButton name="Send your message" width="w-full" />
      </div>
    </form>
  );
};
export default Form;
