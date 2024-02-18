"use client";
import { Box, Modal, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import CreateFood from "../../components/CreateFoodModal";
import CategoryModal from "../../components/CategoryModal";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "../../components/providers/StateProviders";

export default function Administrator() {
  const food_category = [
    { name: "Breakfast" },
    { name: "Soup" },
    { name: "Main course" },
    { name: "Desserts" },
  ];
  const [isIndex, setIsIndex] = useState(food_category[0]);
  const { isCategory, setIsCategory, isCreateFood, setIsCreateFood } =
    useStates();

  return (
    <Stack direction="row">
      <Stack sx={{ maxWidth: "400px", width: "100%", py: "25px", pl: "120px" }}>
        <Typography
          fontFamily="Poppins"
          fontSize="22px"
          fontWeight="700"
          mb="40px"
        >
          Food menu
        </Typography>

        {food_category.map((item, index) => {
          return (
            <Stack
              direction="row"
              key={index}
              onClick={() => {
                setIsIndex(item);
              }}
              sx={{
                bgcolor: item.name === isIndex.name ? "#18BA51" : "white",
                color: item.name === isIndex.name ? "white" : "black",
                border:
                  item.name === isIndex.name ? "none" : "solid 1px #D6D8DB ",
                cursor: "pointer",
                px: "16px",
                borderRadius: "8px",
                alignItems: "center",
                height: "40px",
                mb: "26px",
                maxWidth: "258px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                fontWeight="500"
                fontSize="16px"
                fontFamily="Poppins"
              >
                {item.name}
              </Stack>{" "}
              <MoreVertIcon />
            </Stack>
          );
        })}

        <Stack
          color="#5E6166"
          direction="row"
          height="40px"
          maxWidth="258px"
          alignItems="center"
          gap="8px"
          px="20px"
          borderRadius="8px"
          border="solid 1px #5E6166"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setIsCategory(true);
          }}
        >
          <img src="/add.svg" width="14px" />
          <Typography>Create new category</Typography>
        </Stack>
      </Stack>

      {/* Right side */}

      <Stack bgcolor="#F7F7F8" width="100%" height="100vh" py="40px" px="32px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontFamily="Poppins" fontSize="22px" fontWeight="700">
            {isIndex.name}
          </Typography>
          <Stack
            height="35px"
            maxWidth="130px"
            width="100%"
            bgcolor="#18BA51"
            color="white"
            borderRadius="4px"
            alignItems="center"
            justifyContent="center"
            sx={{
              "&:hover": { cursor: "pointer", backgroundColor: "#05a512" },
            }}
            onClick={(item) => {
              setIsCreateFood(true);
            }}
          >
            Add new food
          </Stack>
        </Stack>
      </Stack>
      <Modal
        open={isCreateFood}
        onClose={() => {
          setIsCreateFood(false);
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxHeight: "854px",
            height: "100%",
            maxWidth: "587px",
            width: "100%",
            p: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "16px",
            outline: "none",
          }}
        >
          {isCreateFood && <CreateFood />}
        </Box>
      </Modal>
      <Modal
        open={isCategory}
        onClose={() => {
          setIsCategory(false);
        }}
      >
        <Stack
          sx={{
            display: "flex",
            height: "284px",
            width: "587px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "16px",
            outline: "none",
          }}
        >
          {isCategory && <CategoryModal />}
        </Stack>
      </Modal>
    </Stack>
  );
}
