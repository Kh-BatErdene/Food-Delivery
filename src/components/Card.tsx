import { Stack, Typography } from "@mui/material";

export const Card = () => {
  const data = [
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
    {
      image: "card.png",
      name: "Өглөөний хоол",
      price: 14800,
      old_price: 16800,
    },
  ];
  return (
    <Stack>
      <Stack direction="row" alignItems="center" sx={{ mb: "42px" }}>
        <img src="/Star.svg" />
        <Typography fontFamily={"Roboto"} fontWeight={700} fontSize={22}>
           Хямдралтай
        </Typography>
      </Stack>

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
              sx={{ maxWidth: "282px", maxHeight: "256px", width: "100%" }}
            >
              <img src={item.image} style={{ width: "100%" }} />

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
