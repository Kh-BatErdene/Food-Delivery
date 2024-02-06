"use client";

// import { CustomInput } from "@/components";
import { Container, Stack, Typography } from "@mui/material";
import { Step1 } from "../../components/step1";
import { Step2 } from "../../components/step2";
import { Step3 } from "../../components/step3";

export default function PasswordRecovery() {
  return (
    <Stack
      sx={{
        display: "flex",
        minWidth: "448px",
        width: "100%",
        p: 4,
        mt: "86px ",
        mb: "115px",
      }}
    >
      <Stack
        direction="row"
        width="200%"
        height={310}
        alignItems={"center"}
        sx={{ bgcolor: "cyan", p: "10px" }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </Stack>
    </Stack>
  );
}
