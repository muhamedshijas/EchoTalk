import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosClose } from "react-icons/io";
function UserBadgeItem({ user, handleFunction }) {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="4px"
      m={1}
      mb={2}
      variant="solid"
      fontSize={15}
      bgColor="green"
      cursor="pointer"
      color="white"
      onClick={handleFunction}
      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
    >
      {user.name}
      <IoIosClose style={{paddingLeft:"1", fontSize:"18px"}} />
    </Box>
  );
}

export default UserBadgeItem;
