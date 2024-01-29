"use client";

import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  return (
    <Container
      sx={{
        display: "flex",
        height: "550px",
        width: "448px",
        p: 4,
        mt: "75px",
      }}
    >
      <Stack width={448} height={549} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Нэвтрэх
        </Typography>

        <Stack gap={2}>
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
          />
          <Stack alignItems={"flex-end"}>
            <CustomInput
              label="Нууц үг"
              placeholder="Нууц үг"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            />
            <Link
              href="/password-recovery"
              style={{
                marginBottom: "48px",
                fontSize: "14px",
                color: "black",
                textDecoration: "none",
              }}
            >
              Нууц үг сэргээх
            </Link>
          </Stack>
        </Stack>

        <Stack gap={3} width={348} height={48}>
          <Button
            variant="contained"
            disableElevation
            disabled={!email || !password}
          >
            Нэвтрэх
          </Button>
          <Typography sx={{ mx: "auto" }}>Эсвэл</Typography>

          <Button
            onClick={() => {
              router.push("/signup");
            }}
            variant="outlined"
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
