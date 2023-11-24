import React, { useState } from "react";
import {
    Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  VStack,
} from "@chakra-ui/react";
import "./UsersignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
function Usersignup() {
  const [name, setName] = useState("");
  const [show,setShow]=useState(false)
  const [email, setEmail] = useState("");
  const [mobileNo, setMobleNo] = useState();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();


  function handleClick(){
    setShow(!show)
  }
  const postDetials=()=>{
    
  }
  function validationErr() {
    if (
      email.trim() === "" ||
      name.trim() === "" ||
      password.trim() === "" ||
      mobileNo.trim() === ""
    ) {
      return false;
    }
    return true;
  }
  async function handleSubmit() {
 
  }
  return (
    <VStack spacing="5px">
      <FormControl id="frist-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="Emai" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="Mobile" isRequired>
        <FormLabel>Mobile No</FormLabel>
        <Input
          placeholder="Enter Your Mobile"
          onChange={(e) => setMobleNo(e.target.value)}
        />
      </FormControl>

      <FormControl id="Enter-Password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
          <Input
            placeholder="Enter Password"
            type={show?"text":"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show?"Hide":"Show"}
          </Button>
          </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="Confirm-Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input
              placeholder="Confirm Password"
              type={show?"text":"password"}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show?"Hide":"Show"}
            </Button>
            </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl id="profile-pic" isRequired>
        <FormLabel>Upload your profile pic</FormLabel>
        <Input
        type="file"
        accept="image/*"
          onChange={(e) => postDetials(e.target.files[0])}

        />
      </FormControl>
          <Button colorScheme="" className="signup-button" width="100%" style={{marginTop:15}} onClick={handleSubmit}>SignUp</Button>
    </VStack>
  );
}

export default Usersignup;
