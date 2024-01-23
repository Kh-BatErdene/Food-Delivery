"use client";

import { Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#18BA51",
        mt: "75px",
        height: "545px",
        m: "auto",
        backgroundImage: "url(/Foods.png)",
      }}
    >
      <Stack sx={{ mt: "114px" }}>
        <Stack direction="row" alignItems="center" gap={1} margin="auto">
          <img src="/WhiteLogo.svg" width="40px" />
          <Typography fontFamily="Poppins" fontWeight="700" color="white">
            Food Delivery
          </Typography>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};
