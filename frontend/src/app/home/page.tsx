"use client";

// import { Card } from "@/components/Card";
import { HomeGuide, Card, OrderModal } from "../../components";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

export default function HomePage() {
  const [order, setOrder] = useState(false);
  return (
    <Stack>
      {/* Home carousel code start here */}
      <Stack
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          maxHeight: "788px",
          height: "100%",
          backgroundImage: "url(/Foods.png)",
          justifyContent: "space-around",
          alignItems: "center",
          px: "24px",
          py: { xs: "75px", md: "175px" },
        }}
      >
        <Container
          sx={{
            display: { xs: "inline", md: "flex" },
            justifyContent: { sm: "center", md: "space-between" },
          }}
        >
          <Box
            sx={{
              maxWidth: "400px",
              m: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "45px", md: "55px" },
                borderBottom: "solid 2px white",
                pb: { xs: "5px", sm: "20px" },
                mb: { xs: "5px", sm: "20px" },
              }}
              fontFamily="Poppins"
              fontWeight={700}
              color="white"
              lineHeight="45.5px"
            >
              Pinecone Food delivery
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "14px", sm: "18px", lg: "22px" },
              }}
            >
              Order Food Online For Take Away or Delivery in Ulaanbaatar
            </Typography>
          </Box>
          <Stack direction="row" sx={{ justifyContent: "center", mt: "20px" }}>
            <img
              style={{
                maxWidth: "588px",
                maxHeight: "438px",
                width: "100%",
              }}
              src="Home-food.png"
            />
          </Stack>
        </Container>
      </Stack>
      <Stack sx={{ width: "100%" }}></Stack>
      <Stack sx={{ boxShadow: 50, pt: "72px" }}>
        <Container sx={{ mb: "138px" }}>
          <Grid container spacing={2}>
            {new Array(4).fill(0).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <HomeGuide />
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
            {new Array(12).fill(0).map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={() => {
                  setOrder(true);
                }}
              >
                <Card />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      <Modal open={order} sx={{ mx: "20px" }}>
        <Box
          sx={{
            display: "flex",
            maxHeight: "564px",
            height: "100%",
            maxWidth: "981px",
            width: "100%",
            p: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "16px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="end"
            sx={{
              cursor: "pointer",
              position: "absolute",
              right: 20,
              top: 20,
            }}
            onClick={() => {
              setOrder(false);
            }}
          >
            <CloseIcon />
          </Stack>

          {order && <OrderModal />}
        </Box>
      </Modal>
    </Stack>
  );
}
