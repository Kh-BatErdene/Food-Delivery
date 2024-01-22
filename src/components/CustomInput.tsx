"use client";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

type CustomInputProps = {
  label: string;
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
        sx={{ width: "384px", background: "#ECEDF0" }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {/* {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} */}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
  );
};
