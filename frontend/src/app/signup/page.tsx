"use client";

// import { CustomInput } from "@/components";
import {
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
import { AuthContext, CustomInput } from "../../components";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Нэрээ оруулна уу"),
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
  // .matches(
  //   /^(?=.*[A-Za-z])?[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Нууц үг багадаа 8 тэмдэгт байх ёстой"
  // ),
  address: yup.string().required("Хаягаа оруулна уу"),
  // repassword: yup.string().required("Нууц үгээ оруулна уу"),
});

export default function SignUp() {
  const [checkCloud, setCheckCloud] = useState(false);
  const { signup } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signup({
        email: values.email,
        name: values.name,
        password: values.password,
        address: values.address,
      });
    },
  });

  useEffect(() => {
    document.addEventListener("keydown", DetectKeyDown);
  });
  const DetectKeyDown = (e) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        width: "448px",
        p: 4,
      }}
    >
      <Stack width={448} height={738} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Бүртгүүлэх
        </Typography>

        <Stack gap={2}>
          <CustomInput
            id="name"
            name="name"
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            type="text"
          />
          <CustomInput
            id="email"
            name="email"
            label="И-мэйл"
            placeholder="И-мэйл хаягаа оруулна уу"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            type="text"
          />
          <CustomInput
            id="address"
            name="address"
            label="Хаяг"
            placeholder="Хаягаа оруулна уу"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            onBlur={formik.handleBlur}
            type="text"
          />
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
          <CustomInput
            id="repassword"
            name="repassword"
            label="Нууц үг давтах"
            placeholder="Нууц үг"
            value={formik.values.repassword}
            onChange={formik.handleChange}
            // error={
            //   formik.touched.repassword &&
            //   Boolean(formik.values.password !== formik.values.repassword)
            // }
            helperText={formik.touched.repassword && formik.errors.repassword}
            onBlur={formik.handleBlur}
            type="password"
          />
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            mt="20px"
            sx={{ cursor: "pointer" }}
          >
            <Stack
              onClick={() => {
                setCheckCloud(!checkCloud);
              }}
            >
              {(!checkCloud && <CloudOutlinedIcon />) ||
                (checkCloud && <CloudIcon />)}
            </Stack>

            <Typography fontSize={14}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Stack>

          <Button
            onClick={() => {
              formik.handleSubmit();
              setOpen(true);
            }}
            variant="contained"
            disableElevation
            disabled={
              !formik.values.email || !formik.values.password || !checkCloud
            }
          >
            Бүртгүүлэх
          </Button>
          {/* <ErrorSnackbar /> */}
        </Stack>
      </Stack>
    </Container>
  );
}
