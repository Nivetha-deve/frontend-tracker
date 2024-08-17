// import { Flex, Menu, MenuButton, MenuItem, MenuList, Stack, StackDivider, Text } from "@chakra-ui/react"
// import { RiArrowDownSFill } from "react-icons/ri"

// const LoginFooter = () => {
//     return (
//         <Stack marginBottom="3rem">
//             <Flex justifyContent="center">
//                 <Menu>
//                     <MenuButton
//                         transition='all 0.2s'
//                         borderWidth='none'
//                     >
//                         <Flex alignContent="center" alignSelf="center" alignItems="center"><img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
//                             <Text marginLeft=".3rem" color="gray">English</Text> <RiArrowDownSFill color="gray" /></Flex>

//                     </MenuButton>
//                     <MenuList>
//                         <MenuItem>ENGLISH</MenuItem>
//                         <MenuItem>Français</MenuItem>
//                         <MenuItem>Español</MenuItem>
//                         <MenuItem>Português</MenuItem>
//                         <MenuItem>Deutsch</MenuItem>
//                         <MenuItem>Русский</MenuItem>
//                         <MenuItem>日本</MenuItem>
//                         <MenuItem>한국어</MenuItem>
//                     </MenuList>
//                 </Menu>
//             </Flex>
//             <StackDivider />
//             <Flex>
//                 <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="safe logo" />
//                 <Text marginLeft=".3rem">
//                     Your data is safe with us:
//                 </Text><Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Security</Text> <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Privacy</Text>
//             </Flex>
//         </Stack>
//     )
// }

// export default LoginFooter

import { useState } from 'react';
import { RiArrowDownSFill } from "react-icons/ri";

const LoginFooter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="mb-12">
            <div className="flex justify-center">
                <div className="relative">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center border-none transition-all duration-200"
                    >
                        <img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
                        <span className="ml-1.5 text-gray-500">English</span>
                        <RiArrowDownSFill className="text-gray-500" />
                    </button>
                    {isOpen && (
                        <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded shadow-lg">
                            <div className="flex flex-col">
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">ENGLISH</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">Français</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">Español</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">Português</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">Deutsch</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">Русский</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">日本</button>
                                <button className="py-2 px-4 text-gray-700 hover:bg-gray-100">한국어</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="my-4 border-t border-gray-300"></div>
            <div className="flex items-center">
                <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="safe logo" />
                <span className="ml-1.5">Your data is safe with us:</span>
                <a href="#" className="ml-1.5 text-blue-500 hover:underline cursor-pointer">Security</a>
                <a href="#" className="ml-1.5 text-blue-500 hover:underline cursor-pointer">Privacy</a>
            </div>
        </div>
    )
}

export default LoginFooter;


