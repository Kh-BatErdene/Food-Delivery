import {} from "@mui/icons-material";
import { Box, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AuthContext } from "./providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import { useStates } from "./providers/StateProviders";

type CardProps = {
  FoodName: string;
  FoodPrice: number;
  Sale?: number;
  ImageUrl: string;
  FoodIngredients: string;
  FoodType: string;
  setOrder: any;
};

export const HomeCard = (props: CardProps) => {
  const { isAdmin } = useContext(AuthContext);
  const {
    setIsOrderType,
    setIsOrderIngre,
    setIsOrderImg,
    setIsOrderNameSale,
    setIsOrderPrice,
    setIsOrderName,
  } = useStates();
  const {
    FoodName,
    FoodPrice,
    Sale,
    ImageUrl,
    setOrder,
    FoodType,
    FoodIngredients,
  } = props;

  const [inAdminPage, setInAdminPage] = useState(false);

  //number Formatter
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    if (isAdmin) {
      setInAdminPage(true);
    } else {
      setInAdminPage(false);
    }
  }, [inAdminPage]);

  return (
    <Stack sx={{ width: "272px", mb: "30px" }}>
      <Stack
        sx={{
          width: "272px",
          position: "relative",
        }}
      >
        <Stack
          position={"relative"}
          sx={{
            minHeight: 180,
            boxShadow: 1,
            borderRadius: "16px",
            width: "272px",
            height: "189px",
            cursor: "pointer",
          }}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          onClick={() => {
            setOrder(true);
            setIsOrderType(FoodType);
            setIsOrderIngre(FoodIngredients);
            setIsOrderImg(ImageUrl);
            setIsOrderNameSale(Sale);
            setIsOrderPrice(FoodPrice);
            setIsOrderName(FoodName);
          }}
        >
          {
            <Stack>
              <img
                style={{
                  objectFit: "cover",
                  width: "292px",
                  height: "225px",
                }}
                src={ImageUrl}
                sizes="small"
                alt="ImageUrlture"
              />
            </Stack>
          }
        </Stack>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            mt: "14px",
            p: 0,
            width: 1,
            "&:last-child": {
              pb: 0,
            },
          }}
        >
          <Typography color="common.black" fontSize={20} fontWeight={590}>
            {FoodName}
          </Typography>
          <Stack gap={2} alignItems="center" sx={{ flexDirection: "row" }}>
            <Typography
              fontSize={20}
              fontWeight={590}
              sx={{ color: "primary.main" }}
            >
              {Sale
                ? numberFormatter.format((1 - Sale / 100) * FoodPrice)
                : numberFormatter.format(FoodPrice)}
              ₮
            </Typography>
            <Typography
              fontSize={18}
              sx={{ color: "#171717", textDecoration: "line-through" }}
            >
              {Boolean(Sale) && numberFormatter.format(FoodPrice)}
              {Boolean(Sale) && "₮"}
            </Typography>
          </Stack>
        </Stack>
        {Boolean(Sale) && (
          <Typography
            color="common.white"
            fontSize={18}
            fontWeight={600}
            bgcolor="primary.main"
            zIndex={3}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              border: 1,
              borderColor: "common.white",
              width: "fit-content",
              p: "4px 16px",
              borderRadius: "16px",
            }}
          >
            {Sale}%
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
