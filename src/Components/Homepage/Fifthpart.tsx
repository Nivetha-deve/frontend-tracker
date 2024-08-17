
// import { Link } from 'react-router-dom'

// import { Box, Flex, Image, Text, Button } from "@chakra-ui/react"

// const Fifthpart = () => {
//   return (
//     <Box>
//       <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
//         <Flex marginTop={"40px"} px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
//           <Text marginBottom={"15px"} fontSize={"2em"}>TIMEKEEPING</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Timer</Text>
//           <Text marginBottom={"10px"}>Track work hours in real time</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Timesheet</Text>
//           <Text marginBottom={"10px"}>Enter time in weekly timesheet</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Calender</Text>
//           <Text marginBottom={"10px"}>Visually block out and manage time</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Autotracker</Text>
//           <Text marginBottom={"10px"}>Track apps and website you use</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Kiosk</Text>
//           <Text marginBottom={"10px"}>Clock in form a shared device</Text>
//         </Flex>

//         <Box width={["100%", "100%", "60%", "60%"]}>
//           <Image width={"100%"} src='https://clockify.me/assets/images/feature-time-tracker-methods.svg' />
//         </Box>
//       </Flex>


//       {/* REPORTING */}

//       <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
//       <Box width={["100%", "100%", "60%", "60%"]}>
//           <Image width={"100%"} src='https://clockify.me/assets/images/feature-time-reporting-activity.svg' />
//         </Box>


//         <Flex marginTop={"50px"}  px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
//           <Text marginBottom={"15px"} fontSize={"2em"}>REPORTING</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Reports</Text>
//           <Text marginBottom={"10px"}>Analyze and export tracked time.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Activity</Text>
//           <Text marginBottom={"10px"}>See who works on what.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Rates</Text>
//           <Text marginBottom={"10px"}>See earnings, cost, and profit.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Progress</Text>
//           <Text marginBottom={"10px"}>See earnings, cost, and profit.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Location</Text>
//           <Text marginBottom={"10px"}>See visited sites and routes.</Text>
//         </Flex>

        
//       </Flex>

//       {/* MANAGEMENT */}

//       <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
//         <Flex marginTop={"50px"}  px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
//           <Text marginBottom={"15px"} fontSize={"2em"}>MANAGEMENT</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Scheduling </Text>
//           <Text marginBottom={"10px"}>Schedule work, assignments, and shifts.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Time off </Text>
//           <Text marginBottom={"10px"}>Manage leaves and holidays.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Approval</Text>
//           <Text marginBottom={"10px"}>Submit and approve timesheets.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Invoiving</Text>
//           <Text marginBottom={"10px"}>Create invoices from billable time.</Text>
//           <Text fontSize={"20px"} fontWeight={"700"}>Expenses</Text>
//           <Text marginBottom={"10px"}>Record project expenses and fees.</Text>
//         </Flex>

//         <Box width={["100%", "100%", "60%", "60%"]}>
//           <Image width={"100%"} src='https://clockify.me/assets/images/feature-team-scheduling.svg' />
//         </Box>
//       </Flex>
      






 

//       <Button marginTop={"45px"} mx={"auto"} display={"block"} colorScheme={"twitter"}>
//           SEE ALL FEATURES
//           </Button>
//     </Box>


//   )
// }

// export default Fifthpart

import { Link } from 'react-router-dom'

const Fifthpart = () => {
  return (
    <div className="container mx-auto">
      {/* TIMEKEEPING */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center my-10 px-6 lg:px-0">
        <div className="mt-10 flex flex-col gap-2 w-full lg:w-2/5">
          <h2 className="text-2xl mb-4">TIMEKEEPING</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Timer</h3>
            <p className="mb-2">Track work hours in real time</p>
            <h3 className="text-lg font-bold">Timesheet</h3>
            <p className="mb-2">Enter time in weekly timesheet</p>
            <h3 className="text-lg font-bold">Calendar</h3>
            <p className="mb-2">Visually block out and manage time</p>
            <h3 className="text-lg font-bold">Autotracker</h3>
            <p className="mb-2">Track apps and websites you use</p>
            <h3 className="text-lg font-bold">Kiosk</h3>
            <p className="mb-2">Clock in from a shared device</p>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <img src='https://clockify.me/assets/images/feature-time-tracker-methods.svg' alt="Timekeeping" className="w-full" />
        </div>
      </div>

      {/* REPORTING */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center my-10 px-6 lg:px-0">
        <div className="w-full lg:w-3/5">
          <img src='https://clockify.me/assets/images/feature-time-reporting-activity.svg' alt="Reporting" className="w-full" />
        </div>
        <div className="mt-10 flex flex-col gap-2 w-full lg:w-2/5">
          <h2 className="text-2xl mb-4">REPORTING</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Reports</h3>
            <p className="mb-2">Analyze and export tracked time.</p>
            <h3 className="text-lg font-bold">Activity</h3>
            <p className="mb-2">See who works on what.</p>
            <h3 className="text-lg font-bold">Rates</h3>
            <p className="mb-2">See earnings, cost, and profit.</p>
            <h3 className="text-lg font-bold">Progress</h3>
            <p className="mb-2">See earnings, cost, and profit.</p>
            <h3 className="text-lg font-bold">Location</h3>
            <p className="mb-2">See visited sites and routes.</p>
          </div>
        </div>
      </div>

      {/* MANAGEMENT */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center my-10 px-6 lg:px-0">
        <div className="mt-10 flex flex-col gap-2 w-full lg:w-2/5">
          <h2 className="text-2xl mb-4">MANAGEMENT</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Scheduling</h3>
            <p className="mb-2">Schedule work, assignments, and shifts.</p>
            <h3 className="text-lg font-bold">Time off</h3>
            <p className="mb-2">Manage leaves and holidays.</p>
            <h3 className="text-lg font-bold">Approval</h3>
            <p className="mb-2">Submit and approve timesheets.</p>
            <h3 className="text-lg font-bold">Invoicing</h3>
            <p className="mb-2">Create invoices from billable time.</p>
            <h3 className="text-lg font-bold">Expenses</h3>
            <p className="mb-2">Record project expenses and fees.</p>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <img src='https://clockify.me/assets/images/feature-team-scheduling.svg' alt="Management" className="w-full" />
        </div>
      </div>

      {/* SEE ALL FEATURES BUTTON */}
      <button className="block mx-auto mt-12 bg-blue-500 text-white py-2 px-6 rounded">
        SEE ALL FEATURES
      </button>
    </div>
  )
}

export default Fifthpart
