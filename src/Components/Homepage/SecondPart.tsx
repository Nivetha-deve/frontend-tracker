// import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';

// import { Link } from "react-router-dom";

// const SecondPart = () => {
//     return (
//         <Box paddingTop={"40px"} width="90%" mx="auto" >      
//             <Flex wrap={"wrap"} direction={"column"} align={"center"} gap={"25px"}>
//                 <Text w={["100%","100%","70%","50%"]} fontSize={["2.4em","2em","2em","2.3em" ]} textAlign={["center", "center","center","center"]} mt="20px" px="25px">
//                         The most popular free <span style={{ color: "#03A9F4", }}>time tracker</span> for teams
//                 </Text>  
//                 <Text w={["100%","100%","70%","50%"]} fontSize={"1.5em"} textAlign="center" px={["20px","20px", "0px","0px"]}>
//                     Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects.Unlimited users, free forever.
//                 </Text>    
//                 <Link to={`/signup`} style={{ textDecoration: "none" }}>
//                     <Button colorScheme={"twitter"}> START TRACKING TIME-IT'S FREE!</Button>
//                 </Link>
//                 <Image px={["20px","20px","20px","20px"]} py="30px" src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="" />
//             </Flex>
//         </Box>
//     )
// }

// export default SecondPart;

import React from 'react';
import { Link } from "react-router-dom";

const SecondPart = () => {
    return (
        <div className="pt-10 w-[90%] mx-auto">
            <div className="flex flex-col items-center gap-6">
                <p className="w-full sm:w-[70%] lg:w-[50%] text-center text-[2.4em] sm:text-[2em] lg:text-[2.3em] mt-5 px-6">
                    The most popular free <span className="text-[#03A9F4]">time tracker</span> for teams
                </p>
                <p className="w-full sm:w-[70%] lg:w-[50%] text-center text-[1.5em] px-5 lg:px-0">
                    Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.
                </p>
                <Link to={`/signup`} className="no-underline">
                    <button className="bg-[#1DA1F2] text-white py-2 px-6 rounded-md hover:bg-[#1A91DA]">START TRACKING TIME - IT'S FREE!</button>
                </Link>
                <img className="px-5 py-7" src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="Clockify customers" />
            </div>
        </div>
    )
}

export default SecondPart;
