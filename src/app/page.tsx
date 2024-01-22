"use client";

import { CustomInput } from "@/components";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };
  return (
    <>
      <CustomInput
        label="Имэйл"
        placeholder="Имэйл хаягаа оруулна уу"
        onChange={handleChange}
        type="text"
      />
      <CustomInput
        label="Нууц үг"
        placeholder="Нууц үг"
        onChange={handleChange}
        type="password"
      />
    </>
  );
}
