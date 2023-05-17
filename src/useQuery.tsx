import { useQuery } from "react-query";
import { handleApi } from "./components/handleApi";
import {
  VStack,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Link,
} from "@chakra-ui/react";
import { RickAndMortyCharacter, apiRoute } from "./components/models";

export function ReactQuery() {
  const getProducts = async () => {
    try {
      const response = await fetch(apiRoute);
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery<RickAndMortyCharacter[]>(
    "characters",
    getProducts
  );

  return (
    <VStack
      spacing={50}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"100%"}
    >
      <Text fontSize={"30px"} as={"b"}>
        Connected With React Query
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
