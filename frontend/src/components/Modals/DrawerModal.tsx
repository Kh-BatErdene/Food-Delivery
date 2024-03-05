"use client";

import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useStates } from "../providers/StateProviders";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import SingleOrderCard from "./SingleOrderCard";

export function DrawerModal() {
  const { setIsOpenDrawer, sumCount } = useStates();
  const pathname = usePathname();
  const router = useRouter();
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <Stack sx={{ width: "586px" }}>
      <Stack minHeight="87vh" p="24px">
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
        <SingleOrderCard />
      </Stack>
      <Stack sx={{ boxShadow: 3, height: "13vh", px: "24px", py: "10px" }}>
        <Stack direction="row" justifyContent="space-between" mt="20px">
          <Stack>
            <Typography fontSize={18} fontWeight={400} color={"#5E6166"}>
              Нийт төлөх дүн
            </Typography>
            <Typography fontSize={18} fontWeight={700} color={"#121316"}>
              {numberFormatter.format(sumCount)}
            </Typography>
          </Stack>
          <Button
            sx={{ maxWidth: "225px", width: "100%" }}
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
    </Stack>
  );
}
