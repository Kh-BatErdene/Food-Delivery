"use client";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useStates } from "../providers/StateProviders";

export function OrderModal() {
  const [count, setCount] = useState(1);
  const {
    isOrderType,
    setIsOrderType,
    isOrderIngre,
    setIsOrderIngre,
    isOrderImg,
    setIsOrderImg,
    isOrderSale,
    setIsOrderNameSale,
    isOrderPric,
    setIsOrderPrice,
    isOrderName,
    setIsOrderName,
    setOrder,
  } = useStates();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Stack direction="row" spacing={4}>
      <img
        src={isOrderImg}
        style={{
          width: "500px",
        }}
      />
      <Stack width="381px">
        <Typography fontSize="28px" fontWeight="700" mt="40px">
          {isOrderName}
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={600}
          fontSize={18}
          color="#18BA51"
        >
          {numberFormatter.format(isOrderPric)}
        </Typography>
        <Typography fontWeight="600" mt="30px">
          Орц
        </Typography>
        <Stack bgcolor="#F6F6F6" color="#767676" mt="20px" p="8px">
          {isOrderIngre}
        </Stack>
        <Typography fontSize="18px" fontWeight={600} my="32px">
          Тоо
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            width="45px"
            height="40px"
            bgcolor="#18BA51"
            borderRadius="10px"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <img src="/minus.svg" width="14px" />
          </Stack>

          <Typography fontFamily={"Poppins"} fontWeight="500">
            {count}
          </Typography>
          <Stack
            width="45px"
            height="40px"
            bgcolor="#18BA51"
            borderRadius="10px"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <img src="/plus.svg" width="14px" />
          </Stack>
        </Stack>

        <Stack
          bgcolor="#18BA51"
          width="100%"
          height="48px"
          mt="32px"
          alignItems="center"
          justifyContent="center"
          color="white"
          sx={{ cursor: "pointer", borderRadius: "4px" }}
          onClick={() => {
            setOrder(false);
            // setIsOrderType(FoodType);
            // setIsOrderIngre(FoodIngredients);
            // setIsOrderImg(ImageUrl);
            // setIsOrderNameSale(Sale);
            // setIsOrderPrice(FoodPrice);
            // setIsOrderName(FoodName);
          }}
        >
          Сагслах
        </Stack>
      </Stack>
    </Stack>
  );
}
