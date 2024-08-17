// import {
//     Badge,
//     Box,
//     Flex,
//     IconButton,
//     Menu,
//     MenuButton,
//     MenuDivider,
//     MenuItem,
//     MenuList,
//     Switch,
//     Text,
//   } from "@chakra-ui/react";
//   import { AiOutlineMenu } from "react-icons/ai";
//   import { useAppDispatch, useAppSelector } from "../../features/hooks";
//   import { useEffect } from "react";
//   import { getUser } from "../../features/users/usersSlice";
//   import { logout } from "../../features/auth/authSlice";
//   import { Show } from "@chakra-ui/react";
//   import { useNavigate } from "react-router-dom";
  
//   export default function AppNavbar({ Open }: { Open: Function }) {
//     const auth = useAppSelector((store) => store.authSlice);
//     const user = useAppSelector((store) => store.usersSlice.user);
//     const [userid, email, p] = auth.token.trim().split(":");
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
    
//     useEffect(() => {
//       dispatch(getUser({ token: auth.token, id: userid }));
//     }, []);
  
//     const SplitName = user?.name.trim().split(" ");
//     const handlelogout = () => {
//       dispatch(logout());
//     };
  
//     return (
//       <Flex
//         maxW={"100%"}
//         borderLeft="4px solid #02a9f4"
//         borderBottom="2px solid #bdbdbd"
//         p="0.3rem 0.8rem"
//         align="center"
//         justify="space-between"
//       >
//         <Flex align="center">
//           <Box>
//             <IconButton
//               variant="ghost"
//               colorScheme="#333333"
//               aria-label="Menu"
//               fontSize="1.65rem"
//               icon={<AiOutlineMenu />}
//               onClick={() => Open()}
//             />
//           </Box>
//           <Box mt="0.4rem" ml="1.4rem">
//             <img
//               className="w-3/4"
//               src="https://app.clockify.me/assets/logo.svg"
//               alt="logo"
//             />
//           </Box>
//         </Flex>
//         <Flex align="center">
//           <Show breakpoint="(min-width: 991px)">
//             <Box pl="1rem">
//               <Text>{user?.name}</Text>
//             </Box>
//           </Show>
//           <Box px="1.5rem">
//             <button className="font-sans bg-white text-[#02a9f4] px-2 border border-[#02a9f4] text-[0.9rem] hover:bg-[#02a9f4] hover:text-white">
//               UPGRADE
//             </button>
//           </Box>
//           <Show breakpoint="(min-width: 991px)">
//             <Box py="0.6rem" borderLeft="border-dotted border-gray-400" px="1.5rem">
//               <img
//                 src="https://app.clockify.me/assets/nav-icons/help.svg"
//                 alt="help"
//               />
//             </Box>
//           </Show>
//           <Box py="0.6rem" borderLeft="border-dotted border-gray-400" px="1.5rem">
//             <img
//               src="https://app.clockify.me/assets/nav-icons/notification.svg"
//               alt="notification"
//             />
//           </Box>
//           <Box borderLeft="border-dotted border-gray-400" px="1.5rem">
//             <Menu isLazy>
//               <MenuButton>
//                 <Box
//                   className="bg-[#2a9789] text-center p-[0.3rem_0.5rem] rounded-full text-white"
//                   _hover={{ cursor: "pointer" }}
//                 >
//                   <Text fontSize="1.3rem" fontWeight="500">
//                     {SplitName?.map((n) => n[0])}
//                   </Text>
//                 </Box>
//               </MenuButton>
//               <MenuList>
//                 <MenuItem _focus={{ bg: "none" }}>
//                   <Text>{user?.name}</Text>
//                 </MenuItem>
//                 <MenuItem _focus={{ bg: "none" }}>
//                   <Text color="gray" fontSize="1rem">
//                     {user?.email}
//                   </Text>
//                 </MenuItem>
//                 <MenuDivider />
//                 <MenuItem>
//                   <Text color="#333333" fontSize="1rem">
//                     Profile Settings
//                   </Text>
//                 </MenuItem>
//                 <MenuItem>
//                   <Flex justify="space-between">
//                     <Text color="#333333" fontSize="1rem">
//                       Dark Theme
//                     </Text>
//                     <Switch ml="4rem" />
//                   </Flex>
//                 </MenuItem>
//                 <MenuItem>
//                   <Text color="#333333" fontSize="1rem">
//                     Download
//                   </Text>
//                 </MenuItem>
//                 <MenuItem>
//                   <Flex justify="space-between">
//                     <Text color="#333333" fontSize="1rem">
//                       Dark Theme
//                     </Text>
//                     <Box ml="4rem">
//                       <Badge colorScheme="green" variant="solid">
//                         NEW
//                       </Badge>
//                     </Box>
//                   </Flex>
//                 </MenuItem>
//                 <MenuDivider />
//                 <MenuItem onClick={handlelogout}>
//                   <Text color="#333333" fontSize="1rem">
//                     Log out
//                   </Text>
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </Box>
//         </Flex>
//       </Flex>
//     );
//   }
  
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { useEffect } from "react";
import { getUser } from "../../features/users/usersSlice";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function AppNavbar({ Open }) {
  const auth = useAppSelector((store) => store.authSlice);
  const user = useAppSelector((store) => store.usersSlice.user);
  const [userid, email, p] = auth.token.trim().split(":");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getUser({ token: auth.token, id: userid }));
  }, []);

  const SplitName = user?.name.trim().split(" ");
  const handlelogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex max-w-full border-l-4 border-l-[#02a9f4] border-b-2 border-b-[#bdbdbd] p-[0.3rem_0.8rem] items-center justify-between">
      <div className="flex items-center">
        <div>
          <button 
            className="text-[#333333] text-[1.65rem] p-2 rounded-md hover:bg-gray-200"
            onClick={() => Open()}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="mt-[0.4rem] ml-[1.4rem]">
          <img
            className="w-3/4"
            src="https://app.clockify.me/assets/logo.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden lg:block pl-4">
          <p>{user?.name}</p>
        </div>
        <div className="px-6">
          <button className="font-sans bg-white text-[#02a9f4] px-2 border border-[#02a9f4] text-[0.9rem] hover:bg-[#02a9f4] hover:text-white">
            UPGRADE
          </button>
        </div>
        <div className="hidden lg:block py-[0.6rem] border-l border-dotted border-gray-400 px-6">
          <img
            src="https://app.clockify.me/assets/nav-icons/help.svg"
            alt="help"
          />
        </div>
        <div className="py-[0.6rem] border-l border-dotted border-gray-400 px-6">
          <img
            src="https://app.clockify.me/assets/nav-icons/notification.svg"
            alt="notification"
          />
        </div>
        <div className="border-l border-dotted border-gray-400 px-6">
          <div className="relative group">
            <div className="bg-[#2a9789] text-center p-[0.3rem_0.5rem] rounded-full text-white cursor-pointer">
              <p className="text-[1.3rem] font-medium">
                {SplitName?.map((n) => n[0])}
              </p>
            </div>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <div className="py-1">
                <p className="px-4 py-2 text-sm">{user?.name}</p>
                <p className="px-4 py-2 text-sm text-gray-500">{user?.email}</p>
                <hr className="my-1" />
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Settings</a>
                <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span>Dark Theme</span>
                  <input type="checkbox" className="ml-4" />
                </div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Download</a>
                <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span>Dark Theme</span>
                  <span className="ml-4 bg-green-500 text-white text-xs px-2 rounded">NEW</span>
                </div>
                <hr className="my-1" />
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handlelogout}>Log out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}