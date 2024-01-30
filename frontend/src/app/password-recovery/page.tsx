"use client";

// import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomInput } from "../../components";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");

  return (
    <Container
      sx={{
        display: "flex",
        width: "448px",
        p: 4,
        mt: "86px ",
        mb: "115px",
      }}
    >
      <Stack width={448} height={310} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Нууц үг сэргээх
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

          <Button variant="contained" disableElevation disabled={!email}>
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
