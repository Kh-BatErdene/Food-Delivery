import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useStates, CustomInput, AuthContext } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  newpassword: yup.string().required("Шинэ нууц үгээ оруулна уу"),
  reppassword: yup.string().required("Нууц үг таарахгүй байна"),
});

export const Step3 = () => {
  const { resetpassword, isOtp } = useContext(AuthContext);
  const { email } = useStates();

  const formik = useFormik({
    initialValues: {
      newpassword: "",
      reppassword: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await resetpassword({
        password: values.newpassword,
        email: `${email}`,
        code: isOtp,
      });
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
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={2}>
        <CustomInput
          id="newpassword"
          name="newpassword"
          label="Нууц үг "
          placeholder="Имэйл хаягаа оруулна уу"
          value={formik.values.newpassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newpassword && Boolean(formik.errors.newpassword)
          }
          helperText={formik.touched.newpassword && formik.errors.newpassword}
          onBlur={formik.handleBlur}
          type="text"
        />

        <CustomInput
          label="Нууц үг давтах "
          name="reppassword"
          placeholder="********"
          sx={{ mt: "10px" }}
          onChange={formik.handleChange}
          error={
            formik.touched.reppassword && Boolean(formik.errors.reppassword)
          }
          helperText={formik.touched.reppassword && formik.errors.reppassword}
          onBlur={formik.handleBlur}
          type="password"
        />

        <Button
          variant="contained"
          disableElevation
          disabled={
            !formik.values.reppassword || !formik.values.newpassword
            // !formik.values.reppassword === !formik.values.newpassword
          }
          sx={{ maxWidth: "384px", width: "100%", mt: "10px" }}
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
