import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { useStates } from "./providers/StateProviders";

export const Step2 = () => {
  const [email, setEmail] = useState("");
  const { setIndex } = useStates();
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "450px",
        alignItems: "center",
        px: "16px",
      }}
    >
      <Typography fontSize={28} fontWeight={700} marginBottom={6}>
        Нууц үг сэргээх
      </Typography>
      <Stack gap={2} alignItems="center">
        <Typography textAlign="center">
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

        <Button
          variant="contained"
          disableElevation
          disabled={!email}
          sx={{ maxWidth: "384px", width: "100%" }}
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Stack>
  );
};
