"use client";

import { Card } from "@/components/Card";
import QuickButton from "@/components/Quick_Button";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      {/* Home carousel code start here */}
      <Stack
        direction="row"
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          height: "788px",
          backgroundImage: "url(/Foods.png)",
          mb: "122px",
          justifyContent: "space-around",
          alignItems: "center",
          px: "24px",
        }}
      >
        <Box style={{ width: "400px" }}>
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
        </Box>

        <img
          style={{
            maxWidth: "588px",
            maxHeight: "438px",
            width: "100%",
          }}
          src="Home-food.png"
        />
      </Stack>
      <Container sx={{ mb: "138px" }}>
        <Grid container spacing={2}>
          {new Array(4).fill(0).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <QuickButton />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cards code start here */}
      <Container sx={{ px: "20px" }}>
        <Stack direction="row" alignItems="center" sx={{ mb: "42px" }}>
          <img src="/Star.svg" />
          <Typography fontFamily={"Roboto"} fontWeight={700} fontSize={22}>
             Хямдралтай
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {new Array(12).fill(0).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
