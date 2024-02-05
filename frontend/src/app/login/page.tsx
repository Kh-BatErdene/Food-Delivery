"use client";

// import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { AuthContext, CustomInput } from "../../components";
import { useContext } from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
  // .matches(
  //   /^(?=.*[A-Za-z])?[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Нууц үг багадаа 8 тэмдэгт байх ёстой"
  // ),
});

export default function Login() {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password });
    },
  });

  return (
    <Container
      sx={{
        display: "flex",
        height: "550px",
        width: "448px",
        p: 4,
        mt: "75px",
      }}
    >
      <Stack width={448} height={549} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Нэвтрэх
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
          <Stack alignItems={"flex-end"}>
            <CustomInput
              id="password"
              name="password"
              label="Нууц үг"
              placeholder="Нууц үг"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
              type="password"
            />
            <Link
              href="/password-recovery"
              style={{
                marginBottom: "48px",
                fontSize: "14px",
                color: "black",
                textDecoration: "none",
              }}
            >
              Нууц үг сэргээх
            </Link>
          </Stack>
        </Stack>

        <Stack gap={3} width={348} height={48}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              formik.handleSubmit();
            }}
            disabled={!formik.values.email || !formik.values.password}
          >
            Нэвтрэх
          </Button>
          <Typography sx={{ mx: "auto" }}>Эсвэл</Typography>

          <Button
            onClick={() => {
              router.push("/signup");
            }}
            variant="outlined"
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
