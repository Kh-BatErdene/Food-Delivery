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
        }}
      />
    </Stack>
  );
};

export default function Select(props: TextFieldProps) {
  const { label } = props;
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Stack>
      <Typography>{label}</Typography>{" "}
      <Autocomplete
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{
          bgcolor: "#F4F4F4",
          "& fieldset": { border: "none" },
          borderRadius: "8px",
          maxWidth: "523px",
          width: "100%",
          height: "56px",
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
}

const top100Films = [
  { title: "Breakfast " },
  { title: "Soup" },
  { title: "Main course" },
  { title: "Desserts" },
];
