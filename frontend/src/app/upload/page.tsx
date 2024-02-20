"use client";

import { Button, Container, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const hnadleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dikptaigp/upload?upload_preset=esdfl8ac`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  return (
    <Stack>
      <Container>
        <Stack py={8} alignItems="center">
          <Stack gap={3} width="400">
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button>Upload</Button>
            {imageUrl && (
              <Stack width="100%" pt="100%" position="relative">
                <Image src={imageUrl} alt="Uploaded" fill />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
