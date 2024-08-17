// import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
// import {Link} from 'react-router-dom'
// import {useState} from 'react'
// import {BsXLg } from "react-icons/bs"
// import {FaBars} from 'react-icons/fa'
// import { Show, Hide } from '@chakra-ui/react'

// const NavbarHome = () => {
//   const [showSmNav, setShowSmNav] = useState(false)
//   return (
//     <Box w={"100%"} boxShadow={"md"} mx="auto">
//       <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","70px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
//         <Flex align={"center"} justify={"space-between"} w={["100%","100%","100%","10%"]}>
//         <Link to='/'>
//             <Image width={["150px"]} src="https://clockify.me/assets/images/clockify-logo.svg" alt='ImageNAvbar' />
//         </Link>
//         <Show breakpoint='(max-width: 991px)'>
//             <Box _hover={{cursor:"pointer"}}>
//               {showSmNav?
//               <BsXLg onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>:
//               <FaBars onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>
//               }
//             </Box>
//         </Show>
//         </Flex>
//         <Flex  display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} align={"center"} direction={["column","column","column","row"]} gap="25px" width={["100%","100%","100%","35%"]}>
//           <Link to='/features'>
//           <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> FEATURES</Text>
//           </Link>
//           <Link  to='/downloads'>
//           <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> DOWNLOADS</Text>
//           </Link>
//         </Flex>


//         <Flex display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} justify={["center", "center", "center", "flex-end"]} align={"center"} gap="25px" direction={["column","column","column","row"]} width={["100%","100%","100%","55%"]}>
//         <Link  to='/login'>
//           <Text _hover={{textDecoration:"none", color:"#03A9F4"}} fontWeight="600"> LOGIN</Text>
//           </Link>
//             {/* _hover={{textDecoration:"none", color:"#03A9F4"}}  textDecoration={"none"} */}
//           <Link   to='/signup'>
//           {/* <Text colorScheme={"twitter"}  _hover={{bg:"#03A9F4", color:"#FFF"}} py={"10px"} px={"15px"} border={"1px solid black"}> SIGNUP FREE</Text> */}
//           <Button colorScheme={"twitter"}>SIGN UP FREE</Button>
//           </Link>
//         </Flex>
//       </Flex>

      
//     </Box>
//   )
// }

// export default NavbarHome


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';

const NavbarHome = () => {
  const [showSmNav, setShowSmNav] = useState(false);

  return (
    <div className="w-full shadow-md mx-auto">
      <div className="flex items-start px-8 py-2 gap-6 sm:px-12 lg:px-16 lg:py-4 lg:flex-row flex-col">
        <div className="flex items-center justify-between w-full sm:w-1/10">
          <Link to="/">
            <img className="w-36" src="https://clockify.me/assets/images/clockify-logo.svg" alt="ImageNavbar" />
          </Link>
          <div className="block lg:hidden cursor-pointer">
            {showSmNav ?
              <BsXLg onClick={() => setShowSmNav(!showSmNav)} className="text-xl" /> :
              <FaBars onClick={() => setShowSmNav(!showSmNav)} className="text-xl" />
            }
          </div>
        </div>

        <div className={`lg:flex ${showSmNav ? 'flex' : 'hidden'} flex-col lg:flex-row gap-6 w-full lg:w-1/3`}>
          <Link to="/features">
            <p className="font-semibold hover:text-blue-500">FEATURES</p>
          </Link>
          <Link to="/downloads">
            <p className="font-semibold hover:text-blue-500">DOWNLOADS</p>
          </Link>
        </div>

        <div className={`lg:flex ${showSmNav ? 'flex' : 'hidden'} items-center justify-center lg:justify-end gap-6 flex-col lg:flex-row w-full lg:w-2/3`}>
          <Link to="/login">
            <p className="font-semibold hover:text-blue-500">LOGIN</p>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              SIGN UP FREE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
