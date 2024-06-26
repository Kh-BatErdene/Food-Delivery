"use client";

// import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CustomInput } from "../Customs/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";

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

export function LoginModal() {
  const router = useRouter();
  const { login, setIsOpen, setRefresh } = useContext(AuthContext);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
  }, []);
  const detectKeyDown = (event) => {
    if (event.key === "Enter") {
      formik.handleSubmit();
    }
  };
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
    <Stack width={400} height={518} alignItems={"center"}>
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
          <Stack
            onClick={() => {
              router.push("/password-recovery");
              setRefresh((prev) => prev + 1);
              setIsOpen(false);
            }}
            sx={{
              marginBottom: "48px",
              fontSize: "14px",
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Нууц үг сэргээх
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={3} width={348} height={48}>
        <Button
          id="login"
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
            setIsOpen(false);
          }}
          variant="outlined"
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
}
