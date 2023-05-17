import { VStack, Text, Stack } from "@chakra-ui/react";
import "./App.css";
import { Appbar } from "./components/appbar";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <VStack
      spacing={50}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"100%"}
    >
      <Appbar />
      <Text fontSize={"50px"} as={"b"} textAlign={"center"}>
        Rick And Morty
      </Text>

      <Stack>
        <Outlet />
      </Stack>
    </VStack>
  );
}

export default App;
