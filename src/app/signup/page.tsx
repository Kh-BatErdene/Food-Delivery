"use client";

import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container
      sx={{
        display: "flex",
        width: "448px",
        p: 4,
      }}
    >
      <Stack width={448} height={738} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Бүртгүүлэх
        </Typography>

        <Stack gap={2}>
          <CustomInput
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
          />
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
          />
          <CustomInput
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
          />
          <CustomInput
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          <CustomInput
            label="Нууц үг давтах"
            placeholder="Нууц үгээ оруулна уу"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          <Stack direction="row" alignItems="center" gap={1}>
            <CloudOutlinedIcon />
            <Typography fontSize={14}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Stack>
          <Button
            variant="contained"
            disableElevation
            disabled={!email || !password}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
