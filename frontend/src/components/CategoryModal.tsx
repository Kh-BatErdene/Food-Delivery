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
      <Stack direction="row" justifyContent="end" m="24px" gap="16px">
        <Stack
          justifyContent="center"
          sx={{
            "&:hover": { cursor: "pointer", color: "black" },
          }}
        >
          Clear
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="110px"
          height="40px"
          sx={{
            bgcolor: "#393939",
            color: "white",
            borderRadius: "4px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#505050",
            },
          }}
        >
          Continue
        </Stack>
      </Stack>
    </Stack>
  );
}
