"use client";
import { Stack, TextField, Typography } from "@mui/material";
import Select, { CustomInput3 } from "../Customs/CustomInput3";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "../providers/StateProviders";
import { Switch } from "antd";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import * as yup from "yup";
import { useFormik } from "formik";
const validationSchema = yup.object({
  FoodName: yup.string().required(),
  FoodIngredients: yup.string().required(),
  FoodPrice: yup.number().required(),
  OnSale: yup.number(),
});
type selectType = {
  type: string;
};
export function CreateFood() {
  const { setIsCreateFood } = useStates();
  const { addFood } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      FoodName: "",
      FoodPrice: 0,
      foodIngredients: "",
      FoodIngredients: "",
      OnSale: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values, selectValue) => {
      addFood({
        FoodName: values.FoodName,
        FoodType: selectValue,
        FoodIngredients: values.FoodIngredients,
        FoodPrice: values.FoodPrice,
        OnSale: values.OnSale,
      });
    },
  });

  function selectValue(e) {
    e.target.value;
  }

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <Stack spacing={2} width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CloseIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setIsCreateFood(false);
          }}
        />

        <Typography fontWeight="700" fontSize="24px">
          Create food
        </Typography>
        <CloseIcon sx={{ color: "white" }} />
      </Stack>
      <CustomInput3
        label="Хоолны нэр"
        placeholder="Хоолны нэрээ оруулна уу!"
        name="FoodName"
        value={formik.values.FoodName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.FoodName && Boolean(formik.errors.FoodName)}
        helperText={formik.touched.FoodName && formik.errors.FoodName}
      />
      <Select
        label="Хоолны ангилал"
        placeholder="Хоолны ангилалаа оруулна уу!"
        onChange={selectValue}
      />

      <CustomInput3
        label="Хоолны орц"
        placeholder="Хоолны орцоо оруулна уу!"
        name="FoodIngredients"
        value={formik.values.FoodIngredients}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.FoodIngredients &&
          Boolean(formik.errors.FoodIngredients)
        }
        helperText={
          formik.touched.FoodIngredients && formik.errors.FoodIngredients
        }
      />

      <CustomInput3
        label="Хоолны үнэ"
        placeholder="Хоолны үнэ оруулна уу!"
        name="FoodPrice"
        value={formik.values.FoodPrice}
        onChange={formik.handleChange}
      />

      <Stack direction="row" spacing={1}>
        <Switch onChange={onChange} style={{ width: "35px" }} />{" "}
        <Typography>Хямдралтай эсэх</Typography>
      </Stack>

      <CustomInput3
        // disabled={!OnSale}
        placeholder="Хямдралын хувь оруулна уу!"
        name="OnSale"
        value={formik.values.OnSale}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.OnSale && Boolean(formik.errors.OnSale)}
        helperText={formik.touched.OnSale && formik.errors.OnSale}
      />
      <Stack width={1} flexDirection={"row"} gap={1}>
        <Stack py={1} gap={1} alignItems="start" width={0.5}>
          <Typography>Хоолны зураг</Typography>
          <Stack gap={3} flexDirection={"row"}>
            <TextField
              type="file"
              // onChange={handleImageChange}
              variant="outlined"
            />
          </Stack>
          <Typography
            // onClick={handleImageUpload}
            p={1}
            bgcolor={"primary.main"}
            width={1}
            borderRadius={1}
            textAlign={"center"}
            color={"common.white"}
            mt={1}
          >
            Upload image
          </Typography>
        </Stack>
        <Stack width={0.5}>
          {/* {imageUrl && (
            <Stack width="100%" height={"100%"} position="relative">
              <Image src={imageUrl} alt="Uploaded" fill />
            </Stack>
          )} */}
        </Stack>
      </Stack>
    </Stack>
  );
}
