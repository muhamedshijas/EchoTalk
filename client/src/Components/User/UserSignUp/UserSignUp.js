import React, { useState } from "react";
import useHistory from 'react-router-dom'
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
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import "./UsersignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Usersignup() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [mobileNo, setMobleNo] = useState();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate= useNavigate()

  function handleClick() {
    setShow(!show);
  }
  const postDetials = (pics) => {
    console.log("hiii");
    setPicLoading(true);
    if (pics == undefined) {
      toast({
        title: "Please upload a image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "echo-talk");
      data.append("cloud_name", "dv5bvojzi");
      fetch("https://api.cloudinary.com/v1_1/dv5bvojzi/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      console.log("errr");
      toast({
        title: "Please Upload a valid image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
   
    }
  };

  async function handleSubmit() {
    if (!name || !email || !password || !cPassword) {
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
    if (password !== cPassword) {
      toast({
        title: "Passwords are not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    try {
        const config={
            headers:{
                "Content-type":"application/json"
            },
        }
        const {data}=await axios.post('/api/user',{email,password,pic,name,mobileNo},config)
        toast({
            title: "Registration Successfull",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo",JSON.stringify(data))
          setPicLoading(false)
          navigate('/chats')
          return;
    } catch (error) {
        toast({
            title: "Registration Successfull",
            description:error.response.data.message,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
    }
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

      <FormControl id="Confirm-Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Password"
            type={show ? "text" : "password"}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="profile-pic" isRequired>
        <FormLabel>Upload your profile pic</FormLabel>
        <Input type="file" onChange={(e) => postDetials(e.target.files[0])} />
      </FormControl>
      <Button
        isLoading={picLoading}
        className="signup-button"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        SignUp
      </Button>
    </VStack>
  );
}

export default Usersignup;
