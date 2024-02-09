"use client";

import { FormEvent, useState } from "react";

import AnimatedButton from "../animated/AnimatedButton";
import CustomInput from "../ContactUs/CustomInput";
import Validator from "@/validator";
import colors from "@/settings/colors";
import { toast } from "react-toastify";

interface IFormValues {
  name: string;
  email: string;
}

const GiveawayForm = () => {
  const [form, setForm] = useState<IFormValues>({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validator = new Validator();
  const onSubmit = async () => {
    if (validator.validateAll(form.name, form.email)) {
      // const res = await emailjs.sendForm(service_id, template_id, formRef.current, public_key);
      const res = { status: 200 };
      if (res.status === 200) {
        toast("Message sent successfully!", {
          progressStyle: { background: colors.ACCENT },
        });
        setForm({
          email: "",
          name: "",
        });
      } else {
        toast("Message failed to send!", {
          progressStyle: { background: "red" },
        });
      }
    } else {
      toast("Please fill in all required fields!", {
        progressStyle: { background: "red" },
      });
    }
  };

  const createController = (key: keyof IFormValues) => ({
    value: form[key],
    setValue: (value: string) => setForm((prev) => ({ ...prev, [key]: value })),
  });
  return (
    <form
      className="flex flex-col gap-6 w-[60%] pb-[100px]"
      onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        await onSubmit();
      }}
    >
      <div className="flex gap-4">
        <CustomInput id="name" type="text" name="name" placeholder="Your Name" controller={createController("name")} />
        <CustomInput
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          controller={createController("email")}
        />
      </div>
      <div className="pt-4">
        <AnimatedButton name="GET IT NOW" width="w-full" disabled={isLoading} />
      </div>
    </form>
  );
};
export default GiveawayForm;
