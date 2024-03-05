import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type CustomStarTitleProps = {
  label: String;
};
export const CustomStarTitle = (props: CustomStarTitleProps) => {
  return (
    <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
      <Image src="/star.svg" alt="star" width={18} height={18} />
      <Typography fontSize={22} fontWeight={700} color={"#272727"}>
        {props.label}
      </Typography>
    </Stack>
  );
};
