"use client";

import { Button, Stack, Typography } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { CustomInput } from "./CustomInput";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const data = [
    {
      label: "НҮҮР",
      href: "home",
    },
    {
      label: "ХООЛНЫ ЦЭС",
      href: "menu",
    },
    {
      label: "ХҮРГЭЛТИЙН БҮС",
      href: "Delivery-area",
    },
  ];
  return (
    <Stack maxWidth="1440px" m="auto">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
        sx={{ maxWidth: "1258px", width: "100%", m: "auto", height: "57px" }}
      >
        <Stack direction="row" alignItems="center" gap={5}>
          <Link href={"/"}>
            <img src="/BlackIcon.svg" style={{ width: "40px" }} />
          </Link>
          {data.map((item, index) => {
            return (
              <Link
                href={`/${item.href}`}
                key={index}
                style={{
                  fontSize: "13px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  alignItems: "center",
                  textDecoration: "none",
                  color: pathname.includes(item.href) ? "#18BA51" : "black",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </Stack>

        <Stack direction="row" alignItems="center" gap={1}>
          <CustomInput type="search" placeholder="Хайх" />

          <Button sx={{ color: "common.black", height: "32px", mb: "2px" }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ mx: "4px" }}
            >
              <ShoppingBasketOutlinedIcon />
              <Typography
                fontSize={13}
                fontWeight={700}
                fontFamily={"Roboto"}
                marginTop={0.4}
              >
                Сагс
              </Typography>
            </Stack>
          </Button>

          <Button sx={{ color: "common.black", height: "32px", mb: "2px" }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ mx: "4px" }}
            >
              <PersonOutlineOutlinedIcon />
              <Typography
                fontSize={13}
                fontWeight={700}
                fontFamily={"Roboto"}
                marginTop={0.4}
              >
                Нэвтрэх
              </Typography>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
