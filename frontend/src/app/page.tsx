"use client";

import { Stack } from "@mui/material";
import HomePage from "./home/page";
import { useContext } from "react";
import { AuthContext } from "../components";
import Administrator from "../components/admin";

export default function Home() {
  const { isAdmin } = useContext(AuthContext);

  return <Stack>{isAdmin ? <Administrator /> : <HomePage />}</Stack>;
}
