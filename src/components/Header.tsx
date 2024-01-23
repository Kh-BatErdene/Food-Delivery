"use client";

import { Stack, Typography } from "@mui/material";
import { Roboto } from "next/font/google";

export const Header = () => {
  return (
    <Stack maxWidth={"1440px"} m={"auto"}>
      <Stack
        direction="row"
        alignItems={"center"}
        gap={5}
        sx={{ maxWidth: "1258px", width: "100%", m: "auto", height: "57px" }}
      >
        <img src="/BlackIcon.svg" style={{ width: "40px" }} />
        <Typography fontSize={13} fontWeight={700} fontFamily={"Roboto"}>
          НҮҮР
        </Typography>
        <Typography fontSize={13} fontWeight={700} fontFamily={"Roboto"}>
          ХООЛНЫ ЦЭС
        </Typography>
        <Typography fontSize={13} fontWeight={700} fontFamily={"Roboto"}>
          ХҮРГЭЛТИЙН БҮС
        </Typography>
      </Stack>
    </Stack>
  );
};
