import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function ErrorSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        sx={{
          position: "absolute",
          top: "50px",
          right: "50px",
          width: "100%",
          height: "100%",
        }}
        message="Хэрэглэгч давхцаж байна"
      />
    </div>
  );
}
