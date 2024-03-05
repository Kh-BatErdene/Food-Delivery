"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { CustomInput3 } from "../Customs/CustomInput3";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "../providers/StateProviders";
import { Switch } from "antd";
import { ChangeEvent, useContext, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { FoodDataContext } from "../providers/FoodDataProviders";
const validationSchema = yup.object({
  FoodName: yup.string().required("Хоолны нэрээ оруулна уу"),
  FoodType: yup.string().required("Хоолны төрөл өө оруулна уу"),
  FoodIngredients: yup.string().required("Хоолны орцоо оруулна уу"),
  FoodPrice: yup.number().required("Хоолны үнээ оруулна уу"),
  OnSale: yup.number(),
});

export function CreateFood() {
  const { setIsCreateFood } = useStates();
  const [isSale, setIsSale] = useState(false);
  const { addFood, setFoodImg, FoodImg, getFood, getcate } =
    useContext(FoodDataContext);

  const formik = useFormik({
    initialValues: {
      FoodName: "",
      FoodPrice: "",
      FoodType: "",
      FoodIngredients: "",
      OnSale: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await addFood({
        FoodName: values.FoodName,
        FoodType: values.FoodType,
        FoodIngredients: values.FoodIngredients,
        FoodPrice: values.FoodPrice,
        OnSale: values.OnSale,
        ImageUrl: FoodImg,
        isSale: isSale,
      });

      await getFood();
      setIsCreateFood(false);
    },
  });

  const onChange = (checked: boolean) => {
    if (checked) setIsSale(true);
    else {
      setIsSale(false);
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dikptaigp/upload?upload_preset=vmbs0z4z",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setFoodImg(data.secure_url);
        console.log(FoodImg);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
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
      <CustomInput3
        select
        label="Хоолны ангилал"
        placeholder="Хоолны ангилалаа оруулна уу!"
        name="FoodType"
        value={formik.values.FoodType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.FoodType && Boolean(formik.errors.FoodType)}
        helperText={formik.touched.FoodType && formik.errors.FoodType}
      >
        {getcate.map((item: any) => {
          return (
            <option
              key={item.name}
              value={item.name}
              style={{ cursor: "pointer", marginBottom: "5px" }}
            >
              {item.name}
            </option>
          );
        })}
      </CustomInput3>

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
        type="number"
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
        disabled={!isSale}
        placeholder="Хямдралын хувь оруулна уу!"
        name="OnSale"
        value={formik.values.OnSale}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.OnSale && Boolean(formik.errors.OnSale)}
        helperText={formik.touched.OnSale && formik.errors.OnSale}
      />
      <Stack width={1} direction={"row"} gap={1}>
        <Stack gap={1} alignItems="start" width="100%">
          <Typography>Хоолны зураг</Typography>
          <Stack direction="row" justifyContent="space-around" width="100%">
            <Stack gap={3}>
              <TextField
                type="file"
                onChange={handleImageChange}
                sx={{ border: "1px dashed #D6D7DC", width: "200px" }}
              />
              <Button onClick={handleImageUpload}>Upload Image</Button>
            </Stack>

            <img
              src={FoodImg}
              width="190px"
              height="100px"
              style={{ borderRadius: "8px", objectFit: "cover" }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            m="0px 24px 0px 0px"
            gap="16px"
            width="100%"
          >
            <Stack
              justifyContent="center"
              onClick={() => {
                formik.resetForm();
              }}
              sx={{
                "&:hover": { cursor: "pointer", color: "black" },
              }}
            >
              Clear
            </Stack>
            <Stack justifyContent="center" alignItems="center" height="40px">
              <Button
                disabled={FoodImg === null}
                sx={{
                  width: "110px",
                  bgcolor: !FoodImg ? "#bbbbbb" : "#393939",
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
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
