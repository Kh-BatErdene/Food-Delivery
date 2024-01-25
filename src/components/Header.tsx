"use client";

import { Button, Stack, Typography } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { CustomInput } from "./CustomInput";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginModal from "./LoginModal";

export const Header = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
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
    <Stack
      id="header"
      direction="row"
      sx={{
        mb: "50px",
        width: "100%",
        bgcolor: "white",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        gap={5}
        sx={{
          width: "100%",
          bgcolor: "white",
          m: "auto",
          px: "24px",
          boxShadow: 5,
          zIndex: 100,
        }}
      >
        <Stack direction="row" alignItems="center" gap={5}>
          <Link href={"/"}>
            <img src="/BlackIcon.svg" style={{ width: "40px" }} />
          </Link>

          {/* //Labels map here */}

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
          {/* //Search...  */}

          <CustomInput type="search" placeholder="Хайх" />

          {/* //SignUp Button */}
          <Button
            sx={{
              color: "common.black",
              height: "32px",
              mb: "2px",
              width: "120px",
            }}
          >
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

          {/* //Login Button */}
          <Button
            sx={{
              color: "common.black",
              height: "32px",
              mb: "2px",
              width: "120px",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
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

          {/* //Login Modal */}
          <div>
            <Modal
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "550px",
                  width: "448px",
                  p: 4,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                }}
              >
                {open && <LoginModal />}
              </Box>
            </Modal>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};
