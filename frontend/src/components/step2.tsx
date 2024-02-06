import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useState } from "react";

export const Step2 = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Typography fontSize={28} fontWeight={700} marginBottom={6}>
        Нууц үг сэргээх
      </Typography>
      <Stack gap={2}>
        <Typography>
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
        </Typography>
        <CustomInput
          label="Нууц үг сэргээх код"
          placeholder="********"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="password"
        />

        <Button variant="contained" disableElevation disabled={!email}>
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Container>
  );
};
