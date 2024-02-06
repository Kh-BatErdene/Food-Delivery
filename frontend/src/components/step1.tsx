import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useState } from "react";

export const Step1 = () => {
  const [email, setEmail] = useState("");
  return (
    <Container sx={{ bgcolor: "yellow" }}>
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

        <Button
          variant="contained"
          disableElevation
          disabled={!email}
          onClick={() => {}}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
