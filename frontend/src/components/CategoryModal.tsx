"use client";
import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStates } from "./providers/StateProviders";
import { CustomInput3 } from "./CustomInput3";
export default function CategoryModal() {
  const { setIsCategory } = useStates();
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py="16px"
        px="24px"
      >
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setIsCategory(false);
          }}
        >
          <CloseIcon />
        </Stack>
        <Typography fontWeight="700" fontSize="24px">
          Creat new category
        </Typography>
        <CloseIcon sx={{ color: "white" }} />
      </Stack>

      <Stack
        width="587px"
        height="132px"
        p={3}
        borderTop="solid 1px #E0E0E0"
        borderBottom="solid 1px #E0E0E0"
      >
        <CustomInput3 label="Category name" />
      </Stack>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
    </Stack>
  );
}
