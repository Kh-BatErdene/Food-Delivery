"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

type CustomInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
};

export const CustomInput = (props: CustomInputProps) => {
  const { placeholder, label, onChange, type = "text" } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack gap={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          width: type === "password" || type === "text" ? "384px" : "260px",
          height: type === "password" || type === "text" ? "48px" : "32px",
          mb: type === "password" || type === "text" ? "0" : "10px",
          bgcolor: "#ECEDF0",
        }}
        InputProps={{
          style: { padding: "0px 10px" },
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            padding:
              type === "password" || type === "text" ? "14px 12px" : "6px ",
            fontFamily: "revert",
            fontSize: "14px",
          },
        }}
      />
    </Stack>
  );
};
