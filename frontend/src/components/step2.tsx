import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useStates } from "./providers/StateProviders";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProviders";

const validationSchema = yup.object({
  code: yup.string().required("Кодоо оруулна уу"),
});

export const Step2 = () => {
  const { email } = useStates();
  const { resetpassword } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await resetpassword({ code: values.code, email: `${email}` });
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
          label="Нууц үг сэргээх"
          placeholder="Имэйл хаягаа оруулна уу"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
          onBlur={formik.handleBlur}
          type="text"
        />
        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.code}
          sx={{ maxWidth: "384px", width: "100%" }}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>{" "}
    </Stack>
  );
};
