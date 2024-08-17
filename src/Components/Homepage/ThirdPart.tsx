// import { Box, Image } from "@chakra-ui/react";
// import  { useState } from "react";

// const ThirdPart = () => {

//   const [show, setshow] = useState(false);


//   return (
//     <Box  width={["90%"]} mx={"auto"}>
//       <Image width={["100%"]} src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="" />
//     </Box>
//   )
// }

// export default ThirdPart

import React, { useState } from 'react';

const ThirdPart = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[90%] mx-auto">
      <img className="w-full" src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="Time Tracker Screenshot" />
    </div>
  );
}

export default ThirdPart;
