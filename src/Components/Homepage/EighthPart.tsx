
// import { Link } from "react-router-dom";

// import { Flex,  Text, Box, Button, Image } from "@chakra-ui/react"

// const EighthPart = () => {
//   return (


//     <Box>
//       <Flex py={"100px"} align={"center"} direction={"column"}>
//         <Text marginBottom="15px" align={"center"} fontSize={"34px"}>  Start tracking time with Clockify</Text>
//         <Flex py={"30px"} gap={"30px"}>
//           <Text>24/7 Support</Text>
//           <Text> •</Text>
//           <Text>Cancel anytime</Text>
//           <Text>•</Text>
//           <Text>  Free forever</Text>
//         </Flex>

//         <Link to={"/signup"}>
//           <Button colorScheme={"twitter"}>
//             CREATE FREE ACCOUNT
//           </Button></Link>
//         <a target={"_blank"} href={"https://clockify.me/customers"}>  <Flex marginTop={"25px"} align={"center"}>
//           <Image  src='https://clockify.me/assets/images/signed-up-icon.svg' />
//           <Text >146,047 people signed up last month</Text>
//         </Flex>
//         </a>

//       </Flex>
//     </Box>

//   )
// }

// export default EighthPart


import { Link } from "react-router-dom";

const EighthPart = () => {
  return (
    <div className="py-24 flex flex-col items-center">
      <h1 className="text-2xl mb-4 text-center">Start tracking time with Clockify</h1>
      <div className="flex py-8 gap-8">
        <span>24/7 Support</span>
        <span>•</span>
        <span>Cancel anytime</span>
        <span>•</span>
        <span>Free forever</span>
      </div>

      <Link to="/signup">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          CREATE FREE ACCOUNT
        </button>
      </Link>

      <a
        href="https://clockify.me/customers"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mt-6"
      >
        <img
          src="https://clockify.me/assets/images/signed-up-icon.svg"
          alt="Signed up icon"
          className="mr-2"
        />
        <span>146,047 people signed up last month</span>
      </a>
    </div>
  );
};

export default EighthPart;
