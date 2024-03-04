"use client";

import { Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { useStates } from "../providers/StateProviders";

export function DrawerModal() {
  const { setIsOpenDrawer } = useStates();
  const [count, setCount] = useState(1);

  return (
    <Stack sx={{ p: "24px", width: "586px" }}>
      <Stack direction="row" sx={{ mb: "50px" }} onClick={() => {}}>
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpenDrawer(false);
          }}
        >
          <ArrowBackIosIcon />
        </Stack>

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
        {/* <Typography sx={{ textAlign: "center" }}>Сагс хоосон байна</Typography> */}

        <Stack>
          <img src={isOrderImg} />
        </Stack>
      </Stack>
    </Stack>
  );
}
