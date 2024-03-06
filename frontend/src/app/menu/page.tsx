"use client";

import { Container, Grid, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { HomeCard } from "../../components/HomeCard";
import { FoodDataContext, useStates } from "../../components";
import { SingleMenu } from "./SingleMenu";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const { searchValue, setOrder } = useStates();
  const { foods, getcate } = useContext(FoodDataContext);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Grid py={4} container columnSpacing={3} rowSpacing={2}>
          {getcate.map((item: any, index: number) => {
            return (
              <Grid item key={index} xs={6} md={4} lg={3}>
                <SingleMenu
                  FoodType={item.name}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={3} py={7}>
          {foods
            .filter((food) => {
              return food.FoodType.includes(selectedMenu);
            })
            .filter((food) =>
              food.FoodName.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item: any, index: number) => (
              <Grid item key={index} xs={6} md={4} lg={3}>
                <HomeCard
                  setOrder={setOrder}
                  FoodName={item.FoodName}
                  FoodPrice={item.FoodPrice}
                  Sale={item.OnSale}
                  ImageUrl={item.ImageUrl}
                  FoodIngredients={item.FoodIngredients}
                  FoodType={item.FoodType}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Container>
  );
}
