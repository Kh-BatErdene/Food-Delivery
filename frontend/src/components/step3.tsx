import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useState } from "react";

export const Step3 = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Typography fontSize={28} fontWeight={700} marginBottom={6}>
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={2}>
        <CustomInput
          label="Нууц үг сэргээх код"
          placeholder="********"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="password"
        />
        <CustomInput
          id="repassword"
          name="repassword"
          label="Нууц үг давтах"
          placeholder="********"
          type="password"
        />

        <Button variant="contained" disableElevation disabled={!email}>
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Container>
  );
};
