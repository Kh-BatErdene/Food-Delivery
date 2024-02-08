"use client";

import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";

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
        }}
      />
    </Stack>
  );
};
