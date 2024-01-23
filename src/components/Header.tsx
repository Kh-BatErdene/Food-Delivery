"use client";

import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const Header = () => {
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

        <Stack direction="row" alignItems="center" gap={1}>
          <TextField
            type="search"
            placeholder="Хайх"
            sx={{ height: "40px" }}
            inputProps={{
              style: { padding: "8px 8px" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Button sx={{ color: "common.black" }}>
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

          <Button sx={{ color: "common.black" }}>
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
