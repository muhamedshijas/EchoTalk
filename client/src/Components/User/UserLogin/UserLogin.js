import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { VStack } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Show,
} from "@chakra-ui/react";

function UserLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    setShow(!show);
  }
  const dispatch = useDispatch();
  function validationErr() {
    if (email.trim() === "" || password.trim() === "") {
      return false;
    }
    return true;
  }

  async function handleSubmit() {}
  return (
    <VStack>
      <FormControl id="Emai" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Enter-Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Password"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme=""
        className="signup-button"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Login
      </Button>

      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={()=>{
            setEmail("guest@gmail.com")
            setPassword("login 123")
        }}
      >
        Login As Guest
      </Button>
    </VStack>
  );
}

export default UserLogin;
