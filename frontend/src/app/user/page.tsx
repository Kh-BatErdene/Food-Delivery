import { Container, Stack } from "@mui/material";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CustomInput2 } from "../../components/CustomInput2";

export default function User() {
  return (
    <Container sx={{ mt: "133px", mb: "200px" }}>
      <Stack alignItems="center" spacing={5}>
        <img src="/profile.png" width={120} />
        <Stack sx={{ fontSize: "28px", fontWeight: "bold" }}>Бат-Эрдэнэ</Stack>
        <Stack spacing={2}>
          <CustomInput2 value="Бат-Эрдэнэ" label="Таны нэр" />
          <CustomInput2 type="number" label="Утасны дугаар" value="89129494" />
          <CustomInput2
            type="email"
            value="baterdene@gmail.com"
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
    </Container>
  );
}
