"use client";

import { Box, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const Footer = () => {
  const data = [
    { label: "Нүүр", href: "Home" },
    { label: "Холбоо барих", href: "Contact" },
    { label: "Хоолны цэс", href: "Menu" },
    { label: "Үйлчилгээний нөхцөл", href: "Terms-of-Service" },
    { label: "Хүргэлтийн бүс", href: "Delivery-area" },
    { label: "Нууцлалын бодлого", href: "Privacy-Policy" },
  ];
  return (
    <Stack
      sx={{
        bgcolor: "#18BA51",
        height: "545px",
        mt: "115px",
        backgroundImage: "url(/Foods.png)",
      }}
    >
      <Stack sx={{ mt: "120px", mx: "10px" }} gap={5} width="1200">
        <Stack direction="row" alignItems="center" gap={1} margin="auto">
          <img src="/WhiteLogo.svg" width="40px" />
          <Typography fontFamily="Poppins" fontWeight="700" color="white">
            Food Delivery
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={1}
          sx={{
            maxWidth: "1200px",
            width: "100%",
            m: "auto",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                style={{ color: "white" }}
                href={`/${item.href}`}
              >
                {item.label}
              </Link>
            );
          })}
        </Stack>
        <Stack direction="row" gap={2} margin="auto">
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
