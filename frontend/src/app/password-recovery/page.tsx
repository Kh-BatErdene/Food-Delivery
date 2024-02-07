"use client";

// import { CustomInput } from "@/components";
import { Stack } from "@mui/material";
import { Step1 } from "../../components/step1";
import { Step2 } from "../../components/step2";
import { Step3 } from "../../components/step3";
import { useContext } from "react";
import { AuthContext } from "../../components";

export default function PasswordRecovery() {
  const { index } = useContext(AuthContext);

  const data = [{ cmp: <Step1 /> }, { cmp: <Step2 /> }, { cmp: <Step3 /> }];
  return (
    <Stack width="100%" overflow="hidden">
      <Stack
        width="300%"
        sx={{
          transition: "0ms",
          transform: `translateX(calc(${(-100 * index) / 3}%))`,
        }}
      >
        <Stack overflow={"hidden"} direction={"row"} height="50vh">
          {data.map((item, index) => {
            return (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                {item.cmp}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
