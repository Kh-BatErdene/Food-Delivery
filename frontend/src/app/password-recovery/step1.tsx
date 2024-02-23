import { Button, Stack, Typography, setRef } from "@mui/material";
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
  const { email, setEmail, setIsClicked, isClicked } = useStates();
  const { recovery, setRefresh, setIndex } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      recovery({ recovery_email: values.email });
      setEmail(values.email);
      setRefresh((prev) => prev + 1);
      setIndex(0);
      setIsClicked(true);
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
          disabled={
            !formik.values.email === !Boolean(formik.errors.email) || isClicked
          }
          style={isClicked ? { cursor: "not-allowed" } : { cursor: "pointer" }}
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
