import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useStates, CustomInput, AuthContext } from "../../components";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  newpassword: yup.string().required("Шинэ нууц үгээ оруулна уу"),
  reppassword: yup.string().required("Нууц үгээ давтана уу"),
});

export const Step3 = () => {
  // const { newpassword } = useContext(AuthContext);
  const router = useRouter();
  const { email } = useStates();

  const formik = useFormik({
    initialValues: {
      newpassword: "",
      reppassword: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // await newpassword({
      //   password: values.newpassword,
      //   email: `${email}`,
      // });
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
          placeholder="********"
          onChange={formik.handleChange}
          type="password"
        />

        <Button
          variant="contained"
          disableElevation
          // disabled={!formik.values.reppassword || !formik.values.newpassword}
          sx={{ maxWidth: "384px", width: "100%" }}
          onClick={() => {
            formik.handleSubmit();
            router.push("/");
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
