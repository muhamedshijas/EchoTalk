import {
  Box,
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import UserLoginPage from "../../../Pages/UserLoginPage";
import UserSignUpPage from "../../../Pages/UserSignUpPage";

function UserHome() {
  const dispatch = useDispatch();
  async function handleLogout(e) {
    await axios.get("/user/logout");
    dispatch({ type: "refresh" });
  }
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Text fontSize="4xl" color="black">
          Snap Chat
        </Text>
        </Box>


        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="1g"
          borderWidth="1px"
        >
        <Tabs variant="soft-rounded" >
        <TabList mb="1em">
        <Tab width="50%">Login</Tab>
        <Tab width="50%">Sign Up </Tab>
        </TabList>
        <TabPanels>
        <TabPanel><UserLoginPage/></TabPanel>
        <TabPanel><UserSignUpPage/></TabPanel>
        </TabPanels>
        </Tabs>
        </Box>
     
    </Container>
  );
}

export default UserHome;
