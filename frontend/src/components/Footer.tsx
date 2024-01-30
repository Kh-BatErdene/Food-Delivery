"use client";

import { Container, Grid, Stack, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export const Footer = () => {
  const data = [
    { label: "Нүүр", href: "home" },
    { label: "Холбоо барих", href: "contact" },
    { label: "Хоолны цэс", href: "menu" },
    { label: "Үйлчилгээний нөхцөл", href: "terms-of-services" },
    { label: "Хүргэлтийн бүс", href: "delivery-area" },
    { label: "Нууцлалын бодлого", href: "privacy-policy" },
  ];
  return (
    <Stack
      sx={{
        bgcolor: "#18BA51",

        height: "100%",
        mt: "115px",
        backgroundImage: "url(/Foods.png)",
        p: "24px",
      }}
    >
      <Stack sx={{ mt: "120px", mx: "10px" }} gap={5} width="1200">
        <Stack direction="row" alignItems="center" gap={1} margin="auto">
          <img src="/WhiteLogo.svg" width="40px" />
          <Typography fontFamily="Poppins" fontWeight="700" color="white">
            Food Delivery
          </Typography>
        </Stack>
        <Container>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            {data.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={4} md={2}>
                  <Link
                    style={{
                      color: "white",
                    }}
                    href={`/${item.href}`}
                  >
                    {item.label}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Container>

        <Stack direction="row" sx={{ m: "auto" }} spacing={1}>
          <Link href={"https://facebook.com/"}>
            <FacebookOutlinedIcon sx={{ fontSize: "40px", fill: "white" }} />
          </Link>
          <Link href={"https://instagram.com/"}>
            <InstagramIcon sx={{ fontSize: "40px", fill: "white" }} />
          </Link>
          <Link href={"https://twitter.com/"}>
            <TwitterIcon sx={{ fontSize: "40px", fill: "white" }} />
          </Link>
        </Stack>
        <hr style={{ maxWidth: "1200px", width: "100%" }} />

        <Stack gap={1} sx={{ color: "common.white", m: "auto" }}>
          <Typography textAlign="center">© 2024 Pinecone Foods LLC </Typography>
          <Typography textAlign="center">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export function FLink() {
  return;
}
