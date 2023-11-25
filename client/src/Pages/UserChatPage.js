import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../Components/User/UserChat/SideDrawer";
import MyChats from "../Components/User/UserChat/MyChats";
import ChatBox from "../Components/User/UserChat/ChatBox";

function UserChatPage() {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
       {user && <SideDrawer></SideDrawer>}
      {
        <Box
          d="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          user&& <MyChats></MyChats>
          user&& <ChatBox></ChatBox>
        </Box>
      }
    </div>
  );
}

export default UserChatPage;
