import { Suspense } from "react";
import {
  HStack,
  VStack,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { fetchData } from "./fetchData";

const apiData = fetchData("https://rickandmortyapi.com/api/character/1,183");

interface RickAndMortyCharacter {
  name: string;
  status: string;
  id: number;
  gender: string;
  species: string;
  image: string;
}

function App() {
  // const data = apiData.read();
  const { data, loading, error } = useFetch<RickAndMortyCharacter[]>(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12"
  );
  console.log(data);

  return (
    <VStack spacing={50} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"50px"} as={"b"} textAlign={"center"}>
        Rick And Morty
      </Text>

      <SimpleGrid columns={3} spacingX={100} spacingY={50} w={"90%"} h={"full"}>
        {error && (
          <Stack>
            <Text>error: {error.message}</Text>
          </Stack>
        )}
        {loading && <Stack> Loading... </Stack>}
        {data?.map((user) => (
          <VStack key={user.id} justifyContent={"space-between"}>
            <Image src={user.image} border={"1px"} borderRadius={"10%"} />

            <Text as={"b"}>{user.name}</Text>
            <Text>{user.species}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      {/* <Suspense fallback={<div>Loading</div>}>
        {data?.map((user) => (
          <VStack key={user}>
            <VStack>
              <Text>
                {user.name} {user.status} {user.gender} {user.species}
              </Text>
            </VStack>
          </VStack>
        ))}
      </Suspense> */}
    </VStack>
  );
}

export default App;
