const getSuspender = (promise: Promise<any>) => {
  let status = "pending";
  let response;

  const suspender = promise
    .then(
      (res) => {
        status = "sucess";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    )
    .catch((err) => {
      status = "error";
      response = err;
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export function fetchData(url: string) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data);

  return getSuspender(promise);
}

{
  /* <Suspense fallback={<div>Loading</div>}>
        {data?.map((user) => (
          <VStack key={user}>
            <VStack>
              <Text>
                {user.name} {user.status} {user.gender} {user.species}
              </Text>
            </VStack>
          </VStack>
        ))}
      </Suspense> */
}

// const apiData = fetchData("https://rickandmortyapi.com/api/character/1,183");

// const data = apiData.read();
