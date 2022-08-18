import { Button, Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useCurriculum } from "src/redux/slices/curriculum";

export function Header() {
  const data = useSelector(useCurriculum);
  return (
    <Flex w="100%" h="10vh" bg="blue.900" shadow="lg">
      <Button onClick={() => alert(JSON.stringify(data.experience))}></Button>
    </Flex>
  );
}
