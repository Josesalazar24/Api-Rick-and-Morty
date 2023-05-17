import { Stack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  {
    const error = useRouteError();
    return (
      <Stack>
        <Text>Error</Text>
        <Text>{error.statusText || error.message}</Text>
      </Stack>
    );
  }
}
