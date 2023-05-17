import {
  VStack,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Link,
} from "@chakra-ui/react";

export function handleApi() {
  return (
    <VStack
      spacing={50}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"100%"}
    >
      <Text fontSize={"50px"} as={"b"} textAlign={"center"}>
        Rick And Morty
      </Text>

      <SimpleGrid columns={3} spacingX={100} spacingY={50} w={"90%"} h={"full"}>
        {error && <Text>error: {error.message}</Text>}
        {isLoading && <Text> Loading... </Text>}
        {data?.map((user) => (
          <VStack key={user.id} justifyContent={"space-between"}>
            <Image src={user.image} border={"1px"} borderRadius={"10%"} />

            <Text as={"b"}>{user.name}</Text>
            <Text>{user.species}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
