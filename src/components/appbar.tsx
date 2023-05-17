import { HStack, Text, Link } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

export function Appbar() {
  return (
    <HStack
      fontSize={"20px"}
      //   spacing={"20px"}
      backgroundColor={"#24325fff"}
      w={"100vw"}
      h={"10vh"}
      // color={"white"}
      justifyContent={"space-between"}
      align={"center"}
      textDecoration={"none"}
    >
      <HStack
        align={"center"}
        justifyContent={"space-between"}
        p={"30px"}
        spacing={50}
        textDecoration={"none"}
      >
        <Link href="/ReactQuery" color={"white"} textDecoration={"none"}>
          ReactQuery
        </Link>
        <Text>
          <Link href="GraphQL" color={"white"} textDecoration={"none"}>
            GraphQL
          </Link>
        </Text>
        <Text>
          <Link href="CustomHook" color={"white"} textDecoration={"none"}>
            Custom Hook
          </Link>
        </Text>
      </HStack>
    </HStack>
  );
}
