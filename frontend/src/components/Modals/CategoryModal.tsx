"use client";
import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "../providers/StateProviders";
import { CustomInput3 } from "../Customs/CustomInput3";
import { useContext } from "react";
import { FoodDataContext } from "../providers/FoodDataProviders";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required(),
});
export function CategoryModal() {
  const { setIsCategory } = useStates();
  const { newCategory, getCategory } = useContext(FoodDataContext);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await newCategory({ name: values.name });
      await getCategory();
      setIsCategory(false);
    },
  });
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py="16px"
        px="24px"
      >
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setIsCategory(false);
          }}
        >
          <CloseIcon />
        </Stack>
        <Typography fontWeight="700" fontSize="24px">
          Creat new category
        </Typography>
        <CloseIcon sx={{ color: "white" }} />
      </Stack>

      <Stack
        width="587px"
        height="132px"
        p={3}
        borderTop="solid 1px #E0E0E0"
        borderBottom="solid 1px #E0E0E0"
      >
        <CustomInput3
          label="Category name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Stack>
      <Stack direction="row" justifyContent="end" m="24px" gap="16px">
        <Stack
          justifyContent="center"
          sx={{
            "&:hover": { cursor: "pointer", color: "black" },
          }}
          onClick={() => {
            formik.resetForm();
          }}
        >
          Clear
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="110px"
          height="40px"
          sx={{
            bgcolor: "#393939",
            color: "white",
            borderRadius: "4px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#505050",
            },
          }}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Continue
        </Stack>
      </Stack>
    </Stack>
  );
}
