import { Stack, Typography } from "@mui/material";
import { useStates } from "../providers/StateProviders";
import { Close } from "@mui/icons-material";

export default function SingleOrderCard() {
  const { isBasketArr, setIsBasketArr } = useStates();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return isBasketArr.map((item, index) => {
    return (
      <Stack
        mb="20px"
        sx={{
          borderBottom: "solid 1px #D6D8DB",
          py: "20px",
          borderTop: "solid 1px #D6D8DB",
        }}
      >
        <Stack key={index} direction="row" spacing={2}>
          <img src={item.isOrderImg} width="245px" height="150px" />
          <Stack sx={{ maxWidth: "270px" }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {item.isOrderName}
              </Typography>
              <Close
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  const newBasket = isBasketArr.filter(
                    (element) => element.isOrderName != item.isOrderName
                  );
                  setIsBasketArr(newBasket);
                }}
              />
            </Stack>

            <Typography
              fontFamily="Poppins"
              fontWeight={600}
              fontSize={18}
              color="#18BA51"
            >
              {numberFormatter.format(
                (1 - item.isOrderSale / 100) * item.isOrderPric
              )}
              ₮
            </Typography>
            <Stack color="#767676" mt="10px" fontSize="14px" width="270px">
              {item.isOrderIngre}
            </Stack>
            <Stack width="150px">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt="5px"
              >
                <Stack
                  width="45px"
                  height="40px"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: item.count === 1 ? "#d1d1d1" : "#18BA51",
                    cursor: item.count === 1 ? "default" : "pointer",
                  }}
                  onClick={() => {
                    const newBasket = isBasketArr.map((element) => {
                      if (element.isOrderName === item.isOrderName) {
                        if (element.count > 1) {
                          element.count -= 1;
                        }
                        return element;
                      } else {
                        return element;
                      }
                    });
                    setIsBasketArr(newBasket);
                  }}
                >
                  <img src="/minus.svg" width="14px" />
                </Stack>

                <Typography fontFamily={"Poppins"} fontWeight="500">
                  {item.count}
                </Typography>

                <Stack
                  width="45px"
                  height="40px"
                  bgcolor="#18BA51"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    const newBasket = isBasketArr.map((element) => {
                      if (element.isOrderName === item.isOrderName) {
                        if (element.count >= 1) {
                          element.count += 1;
                        }
                        return element;
                      } else {
                        return element;
                      }
                    });
                    setIsBasketArr(newBasket);
                  }}
                >
                  <img src="/plus.svg" width="14px" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  });
}
