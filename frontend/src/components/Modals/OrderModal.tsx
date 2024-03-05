"use client";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useStates } from "../providers/StateProviders";

export function OrderModal() {
  const [count, setCount] = useState(1);
  const {
    isOrderIngre,
    isOrderImg,
    isOrderSale,
    isOrderPric,
    isOrderName,
    setOrder,

    //basket
    isBasketArr,
    setIsBasketArr,
  } = useStates();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const newcount = (newNumber) => {
    setCount((prev) => {
      if (newNumber < 0 && prev === 1) return prev;
      return prev + newNumber;
    });
  };
  return (
    <Stack direction="row" spacing={4}>
      <img
        src={isOrderImg}
        style={{
          width: "500px",
          objectFit: "cover",
        }}
      />
      <Stack width="381px">
        <Typography fontSize="28px" fontWeight="700" mt="40px">
          {isOrderName}
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontWeight={600}
          fontSize={18}
          color="#18BA51"
        >
          {numberFormatter.format((1 - isOrderSale / 100) * isOrderPric)}₮
        </Typography>
        <Stack sx={{ height: "180px" }}>
          <Typography fontWeight="600" mt="30px">
            Орц
          </Typography>
          <Stack bgcolor="#F6F6F6" color="#767676" mt="20px" p="8px">
            {isOrderIngre}
          </Stack>
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
            borderRadius="10px"
            alignItems="center"
            justifyContent="center"
            sx={{
              bgcolor: count === 1 ? "#d1d1d1" : "#18BA51",
              cursor: count === 1 ? "default" : "pointer",
            }}
            onClick={() => {
              newcount(-1);
            }}
          >
            <img src="/minus.svg" width="14px" />
          </Stack>

          <Typography fontFamily="Poppins" fontWeight="500">
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
              newcount(1);
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
            let alreadyInBasket = false;
            const NewBasketFood = isBasketArr.map((element) => {
              if (element.isOrderName === isOrderName) {
                alreadyInBasket = true;
                element.count += count;
                return element;
              } else {
                return element;
              }
            });

            if (!alreadyInBasket) {
              setIsBasketArr([
                ...isBasketArr,
                {
                  isOrderIngre,
                  isOrderImg,
                  isOrderSale,
                  isOrderPric,
                  isOrderName,
                  count,
                },
              ]);
            } else {
              setIsBasketArr(NewBasketFood);
            }
            setOrder(false);
          }}
        >
          Сагслах
        </Stack>
      </Stack>
    </Stack>
  );
}
