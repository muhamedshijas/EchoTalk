import { Box, Button, Tooltip, Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { TfiBell } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ChatState } from "../../../Context/ChatProvider";
import UserProfile from "../../../Modals/UserProfile";
import { useNavigate } from "react-router-dom";


function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();
  const navigate= useNavigate()

  function handleLogout(){
    localStorage.removeItem("userInfo");
    navigate("/")
  }
    


  return (
    <Box
      style={{ display: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="search user" hasArrow placement="bottom-end">
        <Button variant="ghost">
          <RiSearch2Line />
          <Text d={{ base: "none", md: "flex" }} px={4}>
            Search User
          </Text>
        </Button>
      </Tooltip>

      <Text fontSize="2xl">Echo Talk</Text>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Menu>
      <MenuButton p={1}>

      </MenuButton>
      <TfiBell style={{fontSize:"22px", margin:"1"}}/>
      { /*<MenuList></MenuList>*/}
      </Menu>

      <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine/>} bg="white" >
      <Avatar
      size="sm"
      cursor="pointer"
      name={user.name}
      src={user.pic}
     
    />
      </MenuButton>
      <MenuList>
      <UserProfile user={user}>
      <MenuItem>My Profile</MenuItem>
      </UserProfile>
      <MenuDivider/>
      <MenuItem onClick={handleLogout}> Logout Button</MenuItem>
      </MenuList>
      </Menu>
      </div>
    </Box>
  );
}

export default SideDrawer;
