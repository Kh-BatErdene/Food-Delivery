import { useContext } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { CustomInput, useStates, AuthContext } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  code: yup.string().required("Кодоо оруулна уу"),
});

export const Step2 = () => {
  const { email, isClicked, setIsClicked } = useStates();
  const { setIsOtp, setIndex } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsOtp(values.code);
      setIndex((prev) => prev + 1);
      setIsClicked(true);
    },
  });

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
          id="code"
          name="code"
          label="Нууц үг сэргээх код (OTP)"
          placeholder="Кодоо оруулна уу"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
          onBlur={formik.handleBlur}
          type="text"
        />

        <Button
          variant="contained"
          sx={{ mt: "20px" }}
          disableElevation
          disabled={!formik.values.code === !Boolean(formik.errors.code)}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
