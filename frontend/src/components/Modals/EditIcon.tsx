import { Stack } from "@mui/material";
import Image from "next/image";

export default function EditIcon() {
  return (
    <Stack
      width="34px"
      height="34px"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderRadius: "100%",
        border: "1px solid #D6D8DB",
        bgcolor: "white",
        position: "absolute",
        bottom: 0,
        right: 0,
        cursor: "pointer",
      }}
    >
      <Image src="/edit.svg" alt="editIcon" width={18} height={18} />
    </Stack>
  );
}
