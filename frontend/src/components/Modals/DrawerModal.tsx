"use client";

import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { useStates } from "../providers/StateProviders";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function DrawerModal() {
  const { setIsOpenDrawer, isBasketArr } = useStates();
  const [count, setCount] = useState(1);
  const pathname = usePathname();
  const router = useRouter();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <Stack sx={{ p: "24px", width: "586px" }}>
      <Stack>
        <Stack direction="row" sx={{ mb: "50px" }} onClick={() => {}}>
          <Stack
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenDrawer(false);
            }}
          >
            <ArrowBackIosIcon />
          </Stack>

          <Typography sx={{ m: "auto", fontWeight: "900", fontSize: "20px" }}>
            Таны сагс
          </Typography>
        </Stack>

        {isBasketArr.map((item, index) => {
          return (
            <Stack
              mb="20px"
              sx={{
                borderBottom: "solid 1px #D6D8DB",
                py: "20px",
                borderTop: "solid 1px #D6D8DB",
              }}
            >
              <Stack key={index} direction="row" spacing={2}>
                <img src={item.isOrderImg} width="245px" height="150px" />
                <Stack>
                  <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                    {item.isOrderName}
                  </Typography>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight={600}
                    fontSize={18}
                    color="#18BA51"
                  >
                    {numberFormatter.format(
                      (1 - item.isOrderSale / 100) * item.isOrderPric
                    )}
                    ₮
                  </Typography>
                  <Stack color="#767676" mt="10px" fontSize="14px" width="90%">
                    {item.isOrderIngre}
                  </Stack>
                  <Stack width="150px">
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
                          item.setCount(item.count - 1);
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
                          item.setCount(item.count + 1);
                        }}
                      >
                        <img src="/plus.svg" width="14px" />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>

      <Stack>
        <Stack>
          <Typography fontSize={18} fontWeight={400} color={"#5E6166"}>
            Нийт төлөх дүн
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={700}
            color={"#121316"}
          ></Typography>
        </Stack>
        <Button
          onClick={() => {
            if (!pathname.includes("/order")) {
              router.push("/order");
            }
          }}
          variant="contained"
        >
          <Typography fontSize={14} fontWeight={400}>
            Захиалах
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
