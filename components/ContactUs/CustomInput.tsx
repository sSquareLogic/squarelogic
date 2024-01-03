"use client";

import { InputHTMLAttributes, useState } from "react";

import CursorHover from "../animated/CursorHover";
import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

interface IController {
  value: string;
  setValue: (value: string) => void;
}

interface IProps {
  controller: IController;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder: string;
  id: string;
  isTextArea?: boolean;
}

const CustomInput = ({ controller, type, id, name, isTextArea, placeholder }: IProps) => {
  const { value, setValue } = controller;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <CursorHover state="disabled" fullWidth>
      <div className="custom-input-wrapper w-full">
        {!isTextArea ? (
          <motion.input
            transition={defaultTransition}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            initial={{ borderColor: `${colors.GRAY}00` }}
            animate={isFocused ? { borderColor: colors.GRAY } : {}}
            className="custom-input px-[14px] py-4 text-base w-full outline-none border border-solid rounded-lg bg-LIGHTBLACK text-WHITE placeholder:text-[#B4B4B4]"
          />
        ) : (
          <motion.textarea
            transition={defaultTransition}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            rows={10}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            initial={{ borderColor: `${colors.GRAY}00` }}
            animate={isFocused ? { borderColor: colors.GRAY } : {}}
            className="custom-textarea px-[14px] resize-none py-4 text-base w-full h-full outline-none border border-solid rounded-lg bg-LIGHTBLACK text-WHITE placeholder:text-[#B4B4B4]"
          />
        )}
      </div>
    </CursorHover>
  );
};
export default CustomInput;
