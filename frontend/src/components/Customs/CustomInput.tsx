"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack gap={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        {...rest}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          width: type === "password" || type === "text" ? "384px" : "260px",
          height: type === "password" || type === "text" ? "48px" : "32px",
          mb: type === "password" || type === "text" ? "0" : "10px",
          "& fieldset": { border: "none" },
          bgcolor: type === "search" ? "white" : "#ECEDF0",
          border: type === "search" ? "solid 1px black" : "none",
          borderRadius: type === "search" ? "8px" : "none",
        }}
        InputProps={{
          sx: { padding: "0px 10px" },
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
