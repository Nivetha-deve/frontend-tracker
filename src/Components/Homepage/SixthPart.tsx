// import { Flex, Stack, Text, Box, Button, Image } from "@chakra-ui/react"

// const SixthPage = () => {
//   return (
//     <Box marginTop={"90px"} >
//       <Flex align={"center"} gap={"15px"} direction={"column"}>
//         <Text  fontSize={"2.5em"}>Time tracking apps</Text>
//         <Text textAlign={"center"} fontSize={"1.17em"} width={["35%"]}>Clockify works across devices. Track time from anywhere — all data is synced online.</Text>
//       </Flex>



//       <Flex my={"40px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

//         <Stack width={["100%", "100%", "50%", "50%"]}>
//           <Box width={"100%"}>
//             <Image src='https://clockify.me/assets/images/time-tracking-app-desktop.png' width={"100%"}/>
//           </Box>
//           <Text fontWeight={"bold"} textAlign={"center"}>DESKTOP APP</Text>
//           <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
//             <Button colorScheme={"twitter"} variant={"outline"}>Windows</Button><Button colorScheme={"twitter"} variant={"outline"}>MAC</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
//           </Flex>
//         </Stack>



//         <Stack width={["100%", "100%", "50%", "50%"]}>
//           <Box width={"100%"}>
//           <Image src='https://clockify.me/assets/images/time-tracking-app-web.png' width={"100%"}/>
//           </Box>
//           <Text fontWeight={"bold"}  textAlign={"center"}>WEB APP</Text>
//           <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
//             <Button colorScheme={"twitter"} variant={"outline"}>EDGE</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
//           </Flex>
//         </Stack>
//       </Flex>


//       {/* SECOND FLEX */}

//       <Flex my={"140px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

//         <Stack width={["100%", "100%", "50%", "50%"]}>
//           <Box width={"100%"}>
//             <Image src='https://clockify.me/assets/images/time-tracking-app-mobile.png' width={"100%"}/>
//           </Box>
//           <Text fontWeight={"bold"}  textAlign={"center"}>MOBILE APP</Text>
//           <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
//             <Button  colorScheme={"twitter"} variant={"outline"}>Android</Button><Button colorScheme={"twitter"} variant={"outline"}>iOS</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
//           </Flex>
//         </Stack>



//         <Stack width={["100%", "100%", "50%", "50%"]}>
//           <Box width={"100%"}>
//           <Image src='https://clockify.me/assets/images/time-tracking-app-kiosk.png' width={"100%"}/>
//           </Box>
//           <Text fontWeight={"bold"}  textAlign={"center"}>KIOSK</Text>
//           <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
//             <Button colorScheme={"twitter"} variant={"outline"}>Any Device</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
//           </Flex>
//         </Stack>
//       </Flex>





    
      
//     </Box>
//   )
// }

// export default SixthPage

import React from 'react';

const SixthPage = () => {
  return (
    <div className="mt-20">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Time tracking apps</h1>
        <p className="text-center text-lg w-[35%]">
          Clockify works across devices. Track time from anywhere — all data is synced online.
        </p>
      </div>

      {/* Desktop & Web App Section */}
      <div className="my-10 mx-auto w-[96%] lg:w-[80%] flex flex-col lg:flex-row gap-8">
        {/* Desktop App */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full">
            <img src='https://clockify.me/assets/images/time-tracking-app-desktop.png' alt="Desktop App" className="w-full"/>
          </div>
          <p className="font-bold text-center">DESKTOP APP</p>
          <div className="flex justify-center w-full items-center gap-4">
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Windows</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">MAC</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">LINUX</button>
          </div>
        </div>

        {/* Web App */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full">
            <img src='https://clockify.me/assets/images/time-tracking-app-web.png' alt="Web App" className="w-full"/>
          </div>
          <p className="font-bold text-center">WEB APP</p>
          <div className="flex justify-center w-full items-center gap-4">
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">EDGE</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">CHROME</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">FIREFOX</button>
          </div>
        </div>
      </div>

      {/* Mobile & Kiosk App Section */}
      <div className="my-36 mx-auto w-[96%] lg:w-[80%] flex flex-col lg:flex-row gap-8">
        {/* Mobile App */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full">
            <img src='https://clockify.me/assets/images/time-tracking-app-mobile.png' alt="Mobile App" className="w-full"/>
          </div>
          <p className="font-bold text-center">MOBILE APP</p>
          <div className="flex justify-center w-full items-center gap-4">
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Android</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">iOS</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">LINUX</button>
          </div>
        </div>

        {/* Kiosk App */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full">
            <img src='https://clockify.me/assets/images/time-tracking-app-kiosk.png' alt="Kiosk App" className="w-full"/>
          </div>
          <p className="font-bold text-center">KIOSK</p>
          <div className="flex justify-center w-full items-center gap-4">
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Any Device</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">CHROME</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">FIREFOX</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthPage;
