"use client";
import { Box, Container, Modal, Stack } from "@mui/material";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CustomInput2 } from "../../components/CustomInput2";
import { useContext, useState } from "react";
import { AuthContext } from "../../components";
import { Logout } from "../../components/LogOut";

export default function User() {
  const { isInfo } = useContext(AuthContext);
  const [isLogOut, setIsLogOut] = useState(false);
  return (
    <Container sx={{ mt: "133px", mb: "200px" }}>
      {isInfo.map((item, index) => {
        return (
          <Stack key={index} alignItems="center" spacing={5}>
            <img src="/profile.png" width={120} />
            <Stack sx={{ fontSize: "28px", fontWeight: "bold" }}>
              {item.name}
            </Stack>
            <Stack spacing={2}>
              <CustomInput2 value={item.name} label="Таны нэр" />
              <CustomInput2
                type="number"
                label="Утасны дугаар"
                value={item.phone}
              />
              <CustomInput2
                type="email"
                value={item.email}
                label="И-мейл хаяг"
              />
              <Stack
                direction="row"
                sx={{
                  bgcolor: "#F6F6F6",
                  border: "none",
                  width: "392px",
                  height: "64px",
                  alignItems: "center",
                  p: "14px",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Stack
                  sx={{
                    bgcolor: "white",
                    borderRadius: "100%",
                    p: "5px",
                    border: "solid 1px #EEEFF2",
                  }}
                >
                  <HistoryOutlinedIcon sx={{ color: "black" }} />
                </Stack>
                Захиалгын түүх
              </Stack>
              <Stack
                direction="row"
                sx={{
                  bgcolor: "#F6F6F6",
                  border: "none",
                  width: "392px",
                  height: "64px",
                  alignItems: "center",
                  p: "14px",
                  gap: "8px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsLogOut(true);
                }}
              >
                <Stack
                  sx={{
                    bgcolor: "white",
                    borderRadius: "100%",
                    p: "5px",
                    border: "solid 1px #EEEFF2",
                  }}
                >
                  <LogoutOutlinedIcon sx={{ color: "black" }} />
                </Stack>
                Гарах
              </Stack>
            </Stack>
          </Stack>
        );
      })}

      {/* <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ChangeProfilePic
            handleClose={handleClose}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        </Box>
      </Modal> */}
      <Modal
        open={isLogOut}
        onClose={() => {
          setIsLogOut(false);
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            width: "384px",
            height: "228px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "20px",
            outline: "none",
            overflow: "hidden",
          }}
        >
          <Logout setIsLogOut={setIsLogOut} />
        </Box>
      </Modal>
    </Container>
  );
}
