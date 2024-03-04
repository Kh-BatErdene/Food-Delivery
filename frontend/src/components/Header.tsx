"use client";
import { Button, Drawer, Stack, Typography } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  useStates,
  AuthContext,
  CustomInput,
  DrawerModal,
  LoginModal,
} from "../components";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { isOpenDrawer, setIsOpenDrawer } = useStates();
  const { isLoggedIn, isOpen, setIsOpen, isInfo, isAdmin } =
    useContext(AuthContext);

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
          borderBottom: "#dfdfdf solid 1px",
          zIndex: 100,
        }}
      >
        <Stack direction="row" alignItems="center" gap={5}>
          <Link href={"/home"}>
            <img src="/BlackIcon.svg" style={{ width: "40px" }} />
          </Link>
          {isAdmin && (
            <Link
              href={`/`}
              style={{
                fontSize: "16px",
                fontFamily: "Roboto",
                fontWeight: "900",
                alignItems: "center",
                textDecoration: "none",
                color: "black",
              }}
            >
              АДМИН
            </Link>
          )}

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
            onClick={() => {
              setIsOpenDrawer(true);
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

          <React.Fragment>
            <Drawer
              anchor="right"
              open={isOpenDrawer}
              onClose={() => {
                setIsOpenDrawer(false);
              }}
            >
              <DrawerModal />
            </Drawer>
          </React.Fragment>

          {/* //Login Button */}
          {!isLoggedIn && (
            <Button
              sx={{
                color: "common.black",
                height: "32px",
                mb: "2px",
                minWidth: "120px",
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ mx: "4px" }}
              >
                <PersonOutlineOutlinedIcon
                  sx={{ color: isOpen ? "#18BA51" : "black" }}
                />

                <Typography
                  fontSize={13}
                  fontWeight={700}
                  fontFamily={"Roboto"}
                  marginTop={0.4}
                  sx={{ color: isOpen ? "#18BA51" : "black" }}
                >
                  Нэвтрэх
                </Typography>
              </Stack>
            </Button>
          )}

          {isLoggedIn && (
            <Button
              sx={{
                color: "common.black",
                height: "32px",
                mb: "2px",
                minWidth: "120px",
              }}
              onClick={() => {
                router.push("/user");
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ mx: "4px" }}
              >
                <img src="/profile.png" width="25px" />

                <Stack
                  fontSize={13}
                  fontWeight={700}
                  fontFamily={"Roboto"}
                  marginTop={0.4}
                  sx={{ color: isOpen ? "#18BA51" : "black" }}
                >
                  {isInfo.map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </Stack>
              </Stack>
            </Button>
          )}

          {/* //Login Modal */}
          <div>
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
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
                  boxShadow: 24,
                  borderRadius: "16px",
                }}
              >
                {isOpen && <LoginModal />}
              </Box>
            </Modal>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};
