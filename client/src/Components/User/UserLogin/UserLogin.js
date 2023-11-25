import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
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
import { useToast } from "@chakra-ui/react";

function UserLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picLoading, setPicLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  function handleClick() {
    setShow(!show);
  }

  async function handleSubmit() {
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(localStorage);

      setPicLoading(false);
      navigate("/chats");
      return;
    } catch (error) {
      console.log(error);
      toast({
        title: "Registration Successfull",
        description: error.response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }
  return (
    <VStack>
      <FormControl id="Emai" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Enter-Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Password"
            value={password}
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
        isLoading={picLoading}
      >
        Login
      </Button>

      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@gmail.com");
          setPassword("login123");
        }}
      >
        Login As Guest
      </Button>
    </VStack>
  );
}

export default UserLogin;
