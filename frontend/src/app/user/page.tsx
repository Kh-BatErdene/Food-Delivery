"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext, Logout, CustomInput2 } from "../../components";
import { toast } from "react-toastify";
import Image from "next/image";
import EditIcon from "../../components/Modals/EditIcon";
import { FoodDataContext } from "../../components/providers/FoodDataProviders";

export default function User() {
  const { isInfo } = useContext(AuthContext);
  const { imageUrl, setImageUrl } = useContext(FoodDataContext);
  const [isLogOut, setIsLogOut] = useState(false);
  const [isSaveBtn, setIsSaveBtn] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dikptaigp/upload?upload_preset=vmbs0z4z",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);

        toast.success("Нүүр зураг амжилттай солигдлоо", {
          position: "top-center",
        });
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
    setIsSaveBtn(false);
  };
  return (
    <Container sx={{ mt: "133px", mb: "200px" }}>
      {isInfo.map((item, index) => {
        return (
          <Stack key={index} alignItems="center" spacing={5}>
            <Stack sx={{ position: "relative" }}>
              {imageUrl && (
                <Stack
                  width="100%"
                  position="relative"
                  style={{ objectFit: "cover" }}
                >
                  <Avatar sx={{ width: "120px", height: "120px" }}>
                    <Image src={imageUrl} alt="Uploaded" fill />
                  </Avatar>
                </Stack>
              )}
              {!imageUrl && (
                <Avatar
                  sx={{
                    width: "120px",
                    height: "120px",
                  }}
                >
                  <img src="/profile.png" width="120px" />
                </Avatar>
              )}
              <EditIcon />
              <TextField
                type="file"
                onClick={() => {
                  setIsSaveBtn(true);
                }}
                onChange={handleImageChange}
                variant="outlined"
                sx={{
                  position: "absolute",
                  width: "34px",
                  height: "34px",
                  right: 0,
                  bottom: 0,
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </Stack>

            <Stack sx={{ fontSize: "28px", fontWeight: "bold" }}>
              {item.name}
            </Stack>
            <Stack spacing={2}>
              <CustomInput2 value={item.name} label="Таны нэр" />
              <CustomInput2
                type="number"
                label="Утасны дугаар"
                value={item.address}
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

      {isSaveBtn && (
        <Stack gap={3} width={400} alignItems="center">
          <Button onClick={handleImageUpload} variant="contained">
            Хадгалах
          </Button>
        </Stack>
      )}

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
