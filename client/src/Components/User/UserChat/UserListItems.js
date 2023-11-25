import React from "react";
import { ChatState } from "../../../Context/ChatProvider";
import { Avatar, Box ,Text} from "@chakra-ui/react";

function UserListItems({ user,handleFunction }) {
  
  return (
    <div>
      <Box
        onClick={handleFunction}
        cursor="pointer"
        bg="#e8e8e8"
        _hover={{
          background: "#3882ac",
          color: "white",
        }}
        w="100%"
        style={{display:"flex"}}
        alignItems="center"
        color="black"
        px={3}
        py={3}
        mb={2}
        borderRadius="1g"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.pic}
        />
        <Box >
        <Text>{user.name}</Text>
        <Text fontSize="xs"><b>Email:</b>
        {user.email}
        </Text>
        </Box>
      </Box>
    </div>
  );
}

export default UserListItems;
