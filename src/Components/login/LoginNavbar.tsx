// import { Flex, Text,Box } from "@chakra-ui/react"
// import { Link } from "react-router-dom"

// const LoginNavbar = () => {
//   return (
//     <Flex justifyContent="space-between" padding="1.5rem" direction={["column","column","column","row"]}>
//         <Box>
//             <Link to="/"><img src="https://app.clockify.me/assets/logo.svg" alt="logo" /></Link>
//         </Box>
//         <Flex justify={"space-between"} py="10px">
//             <Text color="gray">
//                 Don't have an account?
//             </Text>
//             <Link to="/signup">
//               <Text color="#03a9f4" marginLeft=".3rem" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Sign up</Text>
//             </Link>

//         </Flex>
//     </Flex>
//   )
// }

// export default LoginNavbar

import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <div className="flex justify-between p-6 flex-col md:flex-row">
      <div>
        <Link to="/">
          <img src="https://app.clockify.me/assets/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center py-2">
        <span className="text-gray-500">Don't have an account?</span>
        <Link to="/signup">
          <span className="text-blue-500 ml-1 cursor-pointer hover:underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginNavbar;
