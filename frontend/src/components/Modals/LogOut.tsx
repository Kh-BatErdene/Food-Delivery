import { Box, Modal, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../providers/AuthProviders";

type LogoutComfirmProps = { setIsLogOut: Dispatch<SetStateAction<boolean>> };
export const Logout = (props: LogoutComfirmProps) => {
  const { signOut } = useContext(AuthContext);
  const router = useRouter();
  const { setIsLogOut } = props;
  return (
    <Stack>
      <Typography
        p="25px"
        color={"#171717"}
        fontSize={20}
        fontWeight={600}
        width={1}
        textAlign={"center"}
        marginTop="40px"
        marginBottom="10px"
      >
        Та системээс гарахдаа итгэлтэй байна уу?
      </Typography>
      <Stack flexDirection={"row"} width={1} gap={"1px"}>
        <Typography
          onClick={() => {
            signOut();
            router.push("/");
          }}
          width={0.5}
          bgcolor={"#18BA5133"}
          textAlign={"center"}
          fontSize={20}
          fontWeight={600}
          padding={"20px"}
          sx={{
            "&:hover": {
              backgroundColor: "#18BA51",
              color: "common.white",
            },
            cursor: "pointer",
          }}
        >
          Тийм
        </Typography>
        <Typography
          onClick={() => {
            setIsLogOut(false);
          }}
          width={0.5}
          bgcolor={"#18BA5133"}
          textAlign={"center"}
          fontSize={20}
          fontWeight={600}
          padding={"20px"}
          sx={{
            "&:hover": {
              backgroundColor: "#18BA51",
              color: "common.white",
            },
            cursor: "pointer",
          }}
        >
          Үгүй
        </Typography>
      </Stack>
    </Stack>
  );
};
