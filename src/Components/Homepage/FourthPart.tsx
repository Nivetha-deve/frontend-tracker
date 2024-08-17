
// import { Box,Flex, Text } from "@chakra-ui/react"


// const FourthPart = () => {
//   return (
 
//     <Box w={"90vw"} mx="auto">
        
//      <Flex justify={"center"} marginTop={"90px"} align={"center"}  gap={"15px"} direction={"column"}>
//         <Text textAlign={"center"} fontSize={["1.7em","1.7em","2.5em","2.5em"]}>Time management features</Text>
//         <Text textAlign={"center"} fontSize={"1.16em"} width={["96%","96%","65%","45%"]}>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</Text>
//       </Flex>
//     </Box>
//   )
// }

// export default FourthPart

import React from 'react';

const FourthPart = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <div className="flex flex-col items-center justify-center mt-[90px] gap-4">
        <p className="text-center text-[1.7em] md:text-[2.5em]">Time management features</p>
        <p className="text-center text-[1.16em] w-[96%] md:w-[65%] lg:w-[45%]">
          Track productivity, attendance, and billable hours with a simple time tracker and timesheet.
        </p>
      </div>
    </div>
  );
}

export default FourthPart;
