// "use client";
// import { Container, Stack } from "@mui/material";
// import { useState } from "react";

// export const FIlterButtons = () => {
//   const data = [
//     { label: "Breakfast" },
//     { label: "Soup" },
//     { label: "Main Course" },
//     { label: "Dessert" },
//   ];
//   const [isSelected, setIsSelected] = useState(data[0]);

//   return (
//     <Container sx={{ mt: "32px" }}>
//       <Stack direction="row" spacing={1}>
//         {data.map((item, index) => {
//           return (
//             <Stack
//               onClick={() => {
//                 setIsSelected(item);
//               }}
//               direction="row"
//               sx={{
//                 width: "280px",
//                 height: "43px",
//                 bgcolor: item.label === isSelected.label ? "#18BA51" : "white",
//                 color: item.label === isSelected.label ? "white" : "black",
//                 border:
//                   item.label === isSelected.label
//                     ? "none"
//                     : "solid 1px #D6D8DB ",
//                 p: "8px, 16px, 8px, 16px",
//                 borderRadius: "8px",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 cursor: "pointer",
//               }}
//               key={index}
//             >
//               {item.label}
//             </Stack>
//           );
//         })}
//       </Stack>{" "}
//     </Container>
//   );
// };
