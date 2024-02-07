"use client";
import { Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function Administrator() {
  const food_category = [
    { name: "Breakfast" },
    { name: "Soup" },
    { name: "Main course" },
    { name: "Desserts" },
  ];
  const [isIndex, setIsIndex] = useState(food_category[0]);
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
              }}
            >
              <Typography fontWeight="500" fontSize="16px" fontFamily="Poppins">
                {item.name}
                <MoreVertIcon />
              </Typography>
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
        >
          <img src="/add.svg" width="14px" />
          <Typography>Create new category</Typography>
        </Stack>
      </Stack>

      {/* Right side */}

      <Stack bgcolor="#F7F7F8" width="100%" height="100vh" py="40px" px="32px">
        <Typography fontFamily="Poppins" fontSize="22px" fontWeight="700">
          {isIndex.name}
        </Typography>
      </Stack>
    </Stack>
  );
}
