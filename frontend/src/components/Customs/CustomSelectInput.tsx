"use client";
import { PlaceOutlined } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";

export const CustomSelectInput = (props: TextFieldProps) => {
  const { label, type, ...rest } = props;

  return (
    <Stack justifyContent="center" gap={0.5}>
      <TextField
        {...rest}
        select
        type={type}
        inputProps={{
          style: {
            padding: "8px",
          },
        }}
        InputProps={{
          style: {
            backgroundColor: "#F7F7F8",
          },
          startAdornment: type === "select" && (
            <InputAdornment position="start">
              <IconButton>
                <PlaceOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {props.children}
      </TextField>
    </Stack>
  );
};
