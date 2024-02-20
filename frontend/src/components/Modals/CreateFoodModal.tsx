"use client";
import { Stack, Typography } from "@mui/material";
import { CustomInput3 } from "../Customs/CustomInput3";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "../providers/StateProviders";

export function CreateFood() {
  const { setIsCreateFood } = useStates();
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

      <CustomInput3 label="Хоолны нэр" />
      <CustomInput3 label="Хоолны ангилал" />
      <CustomInput3 label="Хоолны орц" />
      <CustomInput3 label="Хоолны үнэ" />
      <CustomInput3 label="Хямдралтай эсэх" />
    </Stack>
  );
}
