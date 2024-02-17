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
  const [isLoading, _setIsLoading] = useState<boolean>(false);

  const validator = new Validator();
  const onSubmit = async () => {
    if (!validator.validateAll(form.name, form.email))
      return toast("Please fill in all required fields!", {
        progressStyle: { background: "red" },
      });

    const res = await fetch("/api/save-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: form.name, email: form.email }),
    });
    await res.json();

    if (!(res.statusText === "OK"))
      return toast("Message failed to send!", {
        progressStyle: { background: "red" },
      });

    toast("Thank you! Redirecting...", {
      progressStyle: { background: colors.ACCENT },
    });
    setTimeout(() => {
      window.location.assign(
        "https://dark-koala-258.notion.site/THE-ULTRA-WEBSITE-OPTIMIZATION-GUIDE-DETAILED-1ebb66824a644944a650af0bc98b3b3b",
      );
    }, 2000);
  };

  const createController = (key: keyof IFormValues) => ({
    value: form[key],
    setValue: (value: string) => setForm((prev) => ({ ...prev, [key]: value })),
  });

  return (
    <form
      className="flex flex-col gap-6 w-[60%] pb-[100px] max-lg:w-[80%] max-md:w-full"
      onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        await onSubmit();
      }}
    >
      <div className="flex gap-4 max-lg:flex-col">
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
