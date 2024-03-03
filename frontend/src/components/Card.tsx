import {} from "@mui/icons-material";
import { Box, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AuthContext } from "./providers/AuthProviders";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { FoodModal } from "./Modals/FoodModal";

type CardProps = {
  FoodName: string;
  FoodPrice: number;
  Sale?: number;
  ImageUrl: string;
  FoodIngredients: string;
  FoodType: string;
};

export const Card = (props: CardProps) => {
  const { isAdmin } = useContext(AuthContext);
  const { FoodName, FoodPrice, Sale, ImageUrl, FoodIngredients, FoodType } =
    props;
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
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

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    width: { xs: "100%", md: "50%" },
    bgcolor: "background.paper",
    border: "1px solid #DADCE0",
    boxShadow: 24,
    p: 2,
    borderRadius: "16px",
  };
  return (
    <Stack sx={{ width: 1, pb: 0 }}>
      <Stack
        sx={{ width: 1, boxShadow: 0, mx: "auto", pb: 0, position: "relative" }}
      >
        <Stack
          position={"relative"}
          sx={{
            minHeight: 180,
            boxShadow: 1,
            borderRadius: "16px",
            aspectRatio: 3 / 2,
          }}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          onClick={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {
            <Stack
              onMouseEnter={() => {
                setHover(true);
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                }}
                src={ImageUrl}
                sizes="small"
                alt="ImageUrlture"
                fill
              />
            </Stack>
          }

          {hover && inAdminPage && (
            <Stack
              position="absolute"
              width="100%"
              height="100%"
              sx={{
                bgcolor: "#00000080",
                zIndex: 4,
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Stack
                px={8}
                py={1}
                bgcolor="common.white"
                border={1}
                borderColor={"#ECEDF0"}
                borderRadius={"100px"}
                width={"166px"}
                sx={{ cursor: "pointer" }}
              >
                <Typography fontSize={20} fontWeight={590}>
                  Edit
                </Typography>
              </Stack>
            </Stack>
          )}
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
      <Modal
        open={!inAdminPage && open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <FoodModal
            setOpen={setOpen}
            FoodName={FoodName}
            FoodPrice={FoodPrice}
            Sale={Sale}
            ImageUrl={ImageUrl}
            FoodIngredients={FoodIngredients}
            FoodType={FoodType}
          />
        </Box>
      </Modal>
    </Stack>
  );
};
