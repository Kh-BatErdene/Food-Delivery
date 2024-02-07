import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useStates } from "./providers/StateProviders";

export const Step2 = () => {
  const { email, setEmail } = useStates();

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
      <Stack gap={2} alignItems="center" width="384px">
        <Typography color="#695C08">
          Таны
          <Typography component="span" color="#18BA51" mx="5px">
            {email}
          </Typography>
          хаяг руу сэргээх код илгээх болно.
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
          onClick={() => {}}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Stack>
  );
};
