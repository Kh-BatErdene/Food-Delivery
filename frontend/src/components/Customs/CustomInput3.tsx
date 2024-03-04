"use client";

import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";

export const CustomInput3 = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;

  return (
    <Stack gap={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        {...rest}
        sx={{
          bgcolor: "#F4F4F4",
          "& fieldset": { border: "none" },
          borderRadius: "8px",
          maxWidth: "523px",
          width: "100%",
          height: "56px",
          mb: "5px",
        }}
      />
    </Stack>
  );
};

export default function Select(props: TextFieldProps) {
  const { label, ...rest } = props;

  return (
    <Stack>
      <Typography>{label}</Typography>
      <Autocomplete
        disablePortal
        options={foodcategory.map((item) => item.title)}
        sx={{
          bgcolor: "#F4F4F4",
          "& fieldset": { border: "none" },
          borderRadius: "8px",
          maxWidth: "523px",
          width: "100%",
          height: "56px",
        }}
        renderInput={(params) => <TextField {...params} {...rest} />}
      />
    </Stack>
  );
}

const foodcategory = [
  { title: "Breakfast " },
  { title: "Soup" },
  { title: "Main course" },
  { title: "Desserts" },
];
