import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useContext, useState } from "react";
import { useStates } from "./providers/StateProviders";
import { AuthContext } from "./providers/AuthProviders";

export const Step1 = () => {
  const { setIndex } = useStates();
  const { recovery } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "450px",
        alignItems: "center",
      }}
    >
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
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
