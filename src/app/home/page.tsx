"use client";

import { Card } from "@/components/Card";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <Stack
        sx={{
          bgcolor: "#18BA51",
          height: "788px",
          backgroundImage: "url(/Foods.png)",
          mb: "122px",
        }}
      ></Stack>
      <Stack
        direction="row"
        sx={{ px: "24px", width: "100%", justifyContent: "center" }}
      >
        <Card />
      </Stack>
    </Stack>
  );
}
