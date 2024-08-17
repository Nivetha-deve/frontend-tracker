// import React from 'react';
// import { Flex, Stack, Text, Box, Button, Image} from "@chakra-ui/react";
// import {Link} from "react-router-dom";

// const Footer = () => {
//     return (
//         <Box maxW={"100vw"} mx="auto">
//             <Box w={"100%"} paddingTop={"20px"} border={"1px solid #CCC"}>
//                 <Flex w={"100%"} px={["20px", "20px", "50px", "8    0px"]} justify={"center"} direction={["column", "column", "row", "row"]}>
//                     <Flex width={["100%", "100%", "30%", "20%"]} direction={"column"}>
//                         <Link to={"/"}><Image width={"50%"} src='https://clockify.me/assets/images/clockify-logo.svg' /></Link>
//                         <Text my={"18px"} width={"100%"}>The world's leading time tracker and timesheet software for teams</Text>
//                         <Flex direction={["row","row", "column","column"]} gap="10px">
//                         <Link  to={"/signup"}>   <Text  textAlign={"center"} _hover={{color: "#03A9F4", cursor:"pointer"}} py="6px" px="6px" borderRadius={"5px"}  w={"150px"} border={"1px solid #654"}  marginBottom={"10px"}>SIGN UP FREE</Text></Link>
//                         <Link  to={"/login"}>     <Text textAlign={"center"}  _hover={{color: "#03A9F4", cursor:"pointer"}} py="6px" px="6px" borderRadius={"5px"} w={"150px"}  border={"1px solid #654"} >LOG IN</Text></Link>
//                         </Flex>
//                     </Flex>
//                     <Flex justify={"center"} width={["100%", "100%", "64%", "75%"]} wrap={"wrap"} gap={"15px"}>
//                         <Flex  w={["45%","45%","20%","20%"]} align={"center"} gap={"12px"} direction={"column"} >
//                             <Text fontWeight={"bold"}>Product</Text>
//                             <Text>Features</Text>
//                             <Text>Download</Text>
//                             <Text>Integration</Text>
//                             <Text>Upgrade</Text>
//                             <Text>API</Text>
//                         </Flex>
//                         <Flex align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
//                             <Text fontWeight={"bold"}>Solution</Text>
//                             <Text>Time Keeping</Text>
//                             <Text>Time Management</Text>
//                             <Text>Reporting</Text>
//                             <Text>Business</Text>
//                             <Text>Calcuators</Text>
//                         </Flex>


//                         <Flex  align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
//                             <Text fontWeight={"bold"}>Company</Text>
//                             <Text>About Us</Text>
//                             <Text>Customers</Text>
//                             <Text>We also make</Text>
//                             <Text>Pumble</Text>
//                             <Text>Plaky</Text>
//                         </Flex>


//                         <Flex align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
//                             <Text fontWeight={"bold"}>Support</Text>
//                             <Text>Help</Text>
//                             <Text>Tutorials</Text>
//                             <Text>Resource</Text>
//                             <Text>Blog</Text>
//                             <Text>Contact</Text>
//                         </Flex>
//                     </Flex>
//                 </Flex>


//                 <Flex  wrap={"wrap"}  width={"98%"} justify={"center"} py={"30px"} gap={"20px"} >
                    
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
//                         © 2022 Clockify 
//                     </Text>
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
//                         Sitemap 
//                     </Text>
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
//                         Cookies 
//                     </Text>
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
//                         Terms 
//                     </Text>
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Privacy </Text>
//                     <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
//                         Security 
//                     </Text>
//                 </Flex>
//             </Box>
//         </Box>
//     )
// }

// export default Footer

import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-full mx-auto">
            <div className="w-full pt-5 border border-gray-300">
                <div className="w-full px-5 md:px-12 lg:px-20 flex flex-col md:flex-row justify-center">
                    <div className="w-full md:w-1/5 flex flex-col">
                        <Link to="/">
                            <img className="w-1/2" src='https://clockify.me/assets/images/clockify-logo.svg' alt="Clockify Logo" />
                        </Link>
                        <p className="my-4 w-full">The world's leading time tracker and timesheet software for teams</p>
                        <div className="flex flex-row md:flex-col gap-2">
                            <Link to="/signup">
                                <p className="text-center hover:text-sky-500 cursor-pointer py-2 px-2 rounded-md w-36 border border-gray-600 mb-2">SIGN UP FREE</p>
                            </Link>
                            <Link to="/login">
                                <p className="text-center hover:text-sky-500 cursor-pointer py-2 px-2 rounded-md w-36 border border-gray-600">LOG IN</p>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-4/5 flex flex-wrap gap-4 justify-center">
                        <div className="w-1/2 sm:w-1/4 md:w-1/5 flex flex-col items-center gap-3">
                            <p className="font-bold">Product</p>
                            <p>Features</p>
                            <p>Download</p>
                            <p>Integration</p>
                            <p>Upgrade</p>
                            <p>API</p>
                        </div>
                        <div className="w-1/2 sm:w-1/4 md:w-1/5 flex flex-col items-center gap-3">
                            <p className="font-bold">Solution</p>
                            <p>Time Keeping</p>
                            <p>Time Management</p>
                            <p>Reporting</p>
                            <p>Business</p>
                            <p>Calculators</p>
                        </div>
                        <div className="w-1/2 sm:w-1/4 md:w-1/5 flex flex-col items-center gap-3">
                            <p className="font-bold">Company</p>
                            <p>About Us</p>
                            <p>Customers</p>
                            <p>We also make</p>
                            <p>Pumble</p>
                            <p>Plaky</p>
                        </div>
                        <div className="w-1/2 sm:w-1/4 md:w-1/5 flex flex-col items-center gap-3">
                            <p className="font-bold">Support</p>
                            <p>Help</p>
                            <p>Tutorials</p>
                            <p>Resource</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center py-7 gap-5 text-gray-500">
                    <p className="cursor-pointer hover:text-sky-500 text-lg">© 2022 Clockify</p>
                    <p className="cursor-pointer hover:text-sky-500 text-lg">Sitemap</p>
                    <p className="cursor-pointer hover:text-sky-500 text-lg">Cookies</p>
                    <p className="cursor-pointer hover:text-sky-500 text-lg">Terms</p>
                    <p className="cursor-pointer hover:text-sky-500 text-lg">Privacy</p>
                    <p className="cursor-pointer hover:text-sky-500 text-lg">Security</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
