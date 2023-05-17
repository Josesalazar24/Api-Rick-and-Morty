import { VStack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { useFetch } from "./hooks/useFetch";
import { RickAndMortyCharacter, apiRoute } from "./components/models";

export function CustomHook() {
  const { data, loading, error } = useFetch<RickAndMortyCharacter[]>(apiRoute);
  console.log(data);

  return (
    <VStack
      spacing={50}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"100%"}
    >
      <Text fontSize={"30px"} as={"b"}>
        Connected With Custom Hook
      </Text>
      <SimpleGrid columns={3} spacingX={100} spacingY={50} w={"90%"} h={"full"}>
        {error && <Text>error: {error.message}</Text>}
        {loading && <Text> Loading... </Text>}
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
