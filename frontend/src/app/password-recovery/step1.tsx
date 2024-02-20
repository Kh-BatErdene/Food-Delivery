import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext, useStates, CustomInput } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
});

export const Step1 = () => {
  const { email, setEmail } = useStates();
  const { recovery } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      recovery({ recovery_email: values.email });
      setEmail(values.email);
    },
  });

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
          id="email"
          name="email"
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          type="text"
        />

        <Button
          variant="contained"
          sx={{ mt: "20px" }}
          disableElevation
          disabled={!formik.values.email === !Boolean(formik.errors.email)}
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
