import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { bool } from "yup";
import { toast } from "react-toastify";
import { useStates } from "../providers/StateProviders";
type FoodModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  FoodName: string;
  FoodPrice: number;
  Sale?: number;
  ImageUrl: string;
  FoodIngredients: string;
  FoodType: string;
};
export const FoodModal = (props: FoodModalProps) => {
  const {
    setOpen,
    FoodName,
    FoodPrice,
    Sale,
    ImageUrl,
    FoodIngredients,
    FoodType,
  } = props;

  const { isBasket, setIsBasket } = useStates();
  const [foodCount, setFoodCount] = useState(1);
  const [foodTotal, setFoodTotal] = useState(0);
  const [inBasket, setInBasket] = useState(false);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const changeFoodCount = (change: number) => {
    setFoodCount((prev) => {
      if (change < 0 && prev == 1) return prev;
      return prev + change;
    });
  };
  return (
    <Stack flexDirection={"row"} gap={"33px"} height={1}>
      <Stack
        position={"relative"}
        borderRadius={1}
        overflow={"hidden"}
        width={0.5}
        sx={{ aspectRatio: 1 / 1 }}
      >
        <Image objectFit="fill" src={ImageUrl} alt="food image" fill />
        <Typography
          color="common.white"
          fontSize={18}
          fontWeight={600}
          bgcolor="primary.main"
          sx={{
            position: "absolute",
            top: "8%",
            right: "10%",
            border: 1,
            borderColor: "common.white",
            width: "fit-content",
            borderRadius: "16px",
          }}
          padding={Boolean(Sale) ? "4px 16px" : 0}
        >
          {Boolean(Sale) && Sale} {Boolean(Sale) && "%"}
        </Typography>
      </Stack>

      <Stack gap={2} width={0.5}>
        <Stack alignItems={"end"} width={1}>
          <Close
            onClick={() => {
              setOpen(false);
            }}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <Stack position={"relative"}>
          <Typography fontSize={28} fontWeight={700} color={"common.black"}>
            {FoodName}
          </Typography>
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Typography color={"primary.main"} fontSize={18} fontWeight={600}>
              {Sale
                ? numberFormatter.format((1 - Sale / 100) * FoodPrice)
                : numberFormatter.format(FoodPrice)}
              ₮
            </Typography>
            <Typography
              color={"#171717"}
              fontSize={16}
              fontWeight={500}
              sx={{ textDecoration: "line-through" }}
            >
              {Boolean(Sale) && numberFormatter.format(FoodPrice)}
              {Boolean(Sale) && "₮"}
            </Typography>
          </Stack>
        </Stack>
        <Stack width={1} gap={"12px"}>
          <Typography fontSize={18} fontWeight={600} color={"common.black"}>
            Орц
          </Typography>
          <Typography
            borderRadius={1}
            padding={1}
            bgcolor={"#F6F6F6"}
            fontSize={16}
            fontWeight={400}
          >
            {FoodIngredients}
          </Typography>
        </Stack>
        <Typography>Тоо</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            onClick={() => {
              changeFoodCount(-1);
            }}
            bgcolor={"primary.main"}
            borderRadius={"10px"}
            p={"8px"}
            color={"common.white"}
          >
            <Remove />
          </Stack>
          <Typography fontSize={16} fontWeight={500} color={"#171717"}>
            {foodCount}
          </Typography>
          <Stack
            onClick={() => {
              changeFoodCount(1);
            }}
            bgcolor={"primary.main"}
            borderRadius={"10px"}
            p={"8px"}
            color={"common.white"}
          >
            <Add />
          </Stack>
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            let inBasket = false;
            const newBasket = isBasket.map((item) => {
              if (item.FoodName == FoodName) {
                inBasket = true;
                item.foodCount += foodCount;
                return item;
              } else {
                return item;
              }
            });
            if (!inBasket) {
              setIsBasket([
                ...isBasket,
                {
                  FoodName,
                  FoodType,
                  FoodIngredients,
                  FoodPrice,
                  Sale,
                  ImageUrl,
                  foodCount,
                },
              ]);
            } else {
              setIsBasket(newBasket);
            }
            setOpen(false);
          }}
        >
          Сагслах
        </Button>
      </Stack>
    </Stack>
  );
};
