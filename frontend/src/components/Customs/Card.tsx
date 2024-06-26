import { Stack, Typography } from "@mui/material";

export const Card = () => {
  const data = [
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
      sale: 20,
    },
  ];
  return (
    <Stack>
      <Stack
        direction="row"
        gap={3}
        sx={{
          mb: "75px",
        }}
      >
        {data.map((item, index) => {
          return (
            <Stack
              key={index}
              sx={{
                cursor: "pointer",
                position: "relative",
                width: "100%",
              }}
            >
              <img src="/card.png"></img>

              <div
                style={{
                  width: "69px",
                  height: "35px",
                  backgroundColor: "#18BA51",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  border: "solid 2px white",
                  color: "white",
                  fontWeight: "700",
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                }}
              >
                {item.sale}%
              </div>

              <Typography
                marginTop={2}
                fontFamily={"Roboto"}
                fontWeight={600}
                fontSize={18}
              >
                {item.name}
              </Typography>
              <Stack direction="row" gap={2}>
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={600}
                  fontSize={18}
                  color="#18BA51"
                >
                  {item.price}
                </Typography>
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={18}
                  sx={{ textDecoration: "line-through " }}
                >
                  {item.old_price}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
