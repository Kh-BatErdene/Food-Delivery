"use client";

import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

export default function DrawerModal() {
  const [count, setCount] = useState(1);
  return (
    <Stack sx={{ p: "24px", width: "586px" }}>
      <Stack direction="row" sx={{ mb: "50px" }} onClick={() => {}}>
        <ArrowBackIosIcon />
        <Typography sx={{ m: "auto", fontWeight: "900", fontSize: "20px" }}>
          Таны сагс
        </Typography>
      </Stack>
      <Stack
        sx={{
          borderBottom: "solid 1px #D6D8DB",
          py: "40px",
          borderTop: "solid 1px #D6D8DB",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Сагс хоосон байна</Typography>
      </Stack>
    </Stack>
  );
}
