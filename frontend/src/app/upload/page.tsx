// "use client";
// import { Button, Container, Stack, TextField } from "@mui/material";
// import Image from "next/image";
// import { ChangeEvent, useState } from "react";
// import { toast } from "react-toastify";
// const Upload = () => {
//   return (
//     <Stack>
//       <Container>
//         <Stack py={8} alignItems="center">
//           <Stack gap={3} width={400}>
//             <TextField
//               type="file"
//               onChange={handleImageChange}
//               variant="outlined"
//             />
//             <Button onClick={handleImageUpload} variant="contained">
//               Upload
//             </Button>
//             {imageUrl && (
//               <Stack
//                 width="100%"
//                 pt="100%"
//                 position="relative"
//                 style={{ objectFit: "cover" }}
//               >
//                 <Image src={imageUrl} alt="Uploaded" fill />
//               </Stack>
//             )}
//           </Stack>
//         </Stack>
//       </Container>
//     </Stack>
//   );
// };
// export default Upload;
