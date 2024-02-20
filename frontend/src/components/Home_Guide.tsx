import { Stack, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export function HomeGuide() {
  const data = [
    {
      title: "Хүргэлтийн төлөв хянах",
      icon: <AutoStoriesOutlinedIcon style={{ color: "#18BA51" }} />,
      des: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack direction="row" justifyContent="center">
      {data.map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              width: "264px",
              height: "155px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: 4,
              p: "24px",
            }}
          >
            <Stack mt={1}>{item.icon}</Stack>

            <Typography
              fontSize="18px"
              fontWeight={700}
              fontStyle="bold"
              marginTop="20px"
            >
              {item.title}
            </Typography>
            <Typography fontSize={14} color="#272727">
              {item.des}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}
