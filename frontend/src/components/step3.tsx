import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useContext, useState } from "react";
import { useStates } from "./providers/StateProviders";
import { useRouter } from "next/navigation";
import { AuthContext } from "./providers/AuthProviders";

export const Step3 = () => {
  const [email, setEmail] = useState("");
  const { setIsOpen, index, setIndex } = useContext(AuthContext);
  const router = useRouter();
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "450px",
        alignItems: "center",
      }}
    >
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
          onClick={() => {
            setIndex((prev) => prev + 1);
            if (index === 2) {
              setIndex(0);
              router.push("/home");
              setIsOpen(true);
            }
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Stack>
  );
};
