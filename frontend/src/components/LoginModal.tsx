"use client";

// import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomInput } from "./CustomInput";

export default function LoginModal() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
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
  );
}
