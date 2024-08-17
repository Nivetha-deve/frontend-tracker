
// import { Flex,  Text, Box,  Image } from "@chakra-ui/react"
// import { AiOutlineArrowRight } from "react-icons/ai"
// import { TiTick } from "react-icons/ti"

// const SeventhPart = () => {
//     return (
//         <Box py={"60px"} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">

//             <Flex direction={["column", "row","row", "row"]} justify={"center"} width={"100%"}>
//                 <Box maxWidth={["90%","90%","90%","40%"]}>
//                     <Image src='https://clockify.me/assets/images/free-forever-clock-4.svg' w="100%" px="3%"/>
//                 </Box>
//                 <Flex maxWidth={["90%","50%","50%","50%"]} marginTop={"55px"} justify={"center"} gap={"22px"} direction={"column"}>
//                     <Text fontWeight={"bold"} marginLeft={"45px"} fontSize={"74px"} color={"#03A9F4"}>FREE</Text>
//                     <Text marginLeft={"45px"} marginTop={"-34px"} fontSize={"34px"} color={"#03A9F4"}>FOREVER</Text>
//                     <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}>  <TiTick /><Text>Unlimited Users</Text></Flex>
//                     <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}><TiTick /><Text>Unlimited tracking</Text></Flex>
//                     <Flex fontSize={"19px"} marginLeft={"45px"} align={"center"}> <TiTick /><Text>Unlimited projects</Text></Flex>
//                     <Flex fontSize={"17px"} color={"#03A9F4"} marginLeft={"45px"} align={"center"}><Text>Upgrade</Text> <AiOutlineArrowRight /></Flex>
//                 </Flex>
//             </Flex>
//         </Box>


//     )
// }

// export default SeventhPart


import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const SeventhPart = () => {
    return (
        <div className="py-14 shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">
            <div className="flex flex-col lg:flex-row justify-center w-full">
                <div className="max-w-[90%] lg:max-w-[40%]">
                    <img src='https://clockify.me/assets/images/free-forever-clock-4.svg' className="w-full px-3%" alt="Free Forever" />
                </div>
                <div className="max-w-[90%] lg:max-w-[50%] mt-14 lg:mt-0 flex flex-col gap-6 justify-center">
                    <p className="font-bold ml-12 text-[74px] text-[#03A9F4]">FREE</p>
                    <p className="ml-12 mt-[-1.5rem] text-[34px] text-[#03A9F4]">FOREVER</p>
                    <div className="flex items-center text-[19px] ml-12">
                        <TiTick className="mr-2" /><span>Unlimited Users</span>
                    </div>
                    <div className="flex items-center text-[19px] ml-12">
                        <TiTick className="mr-2" /><span>Unlimited tracking</span>
                    </div>
                    <div className="flex items-center text-[19px] ml-12">
                        <TiTick className="mr-2" /><span>Unlimited projects</span>
                    </div>
                    <div className="flex items-center text-[17px] text-[#03A9F4] ml-12">
                        <span>Upgrade</span> <AiOutlineArrowRight className="ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeventhPart;
