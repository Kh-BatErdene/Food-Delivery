"use client";

import { Card } from "@/components/Card";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      {/* Home carousel code start here */}
      <Stack
        direction="row"
        sx={{
          bgcolor: "#18BA51",
          width: "100%",
          height: "788px",
          backgroundImage: "url(/Foods.png)",
          mb: "122px",
          justifyContent: "space-around",
          alignItems: "center",
          px: "24px",
        }}
      >
        <div style={{ width: "400px" }}>
          <Typography
            fontSize="55px"
            fontFamily="Poppins"
            fontWeight={700}
            color="white"
            lineHeight="45.5px"
          >
            Pinecone Food delivery
          </Typography>
          <hr style={{ margin: "24px 0px" }}></hr>
          <p style={{ color: "white", fontSize: "22px" }}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img
          style={{
            maxWidth: "588px",
            maxHeight: "438px",
            width: "100%",
          }}
          src="Home-food.png"
        />
      </Stack>

      {/* Cards code start here */}
      <Stack
        direction="row"
        sx={{ px: "24px", width: "100%", justifyContent: "center" }}
      >
        <Card />
      </Stack>
    </Stack>
  );
}
