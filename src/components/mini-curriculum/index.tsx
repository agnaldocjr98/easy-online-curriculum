import {
  Container,
  Flex,
  Stack,
  Text,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useCurriculum } from "src/redux/slices/curriculum";
import {
  AtSymbolIcon,
  PhoneIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

export function MiniCurriculum() {
  const curriculum = useSelector(useCurriculum);
  return (
    <Stack w="40%" height="80vh">
      <Text fontWeight="semibold" fontSize="lg" color="gray.700">
        Demonstração
      </Text>
      <Flex
        w="100%"
        h="100%"
        border="4px"
        borderColor="gray.300"
        rounded="lg"
        position="relative"
      >
        {/* <Avatar
          name="John Doe"
          position="absolute"
          right={24}
          top="60px"
          w="70px"
          h="70px"
          color="white"
        /> */}
        <Stack flex={1}>
          <Container maxW="container.lg" mt={4}>
            <Stack spacing={0.1}>
              <Text fontSize={13} color="blue.700" fontWeight="semibold">
                {curriculum.personalData.name}
              </Text>
              <Text fontSize={10} color="gray.600" fontWeight="normal">
                {curriculum.personalData.current_role}
              </Text>
            </Stack>

            <Stack direction="column" mt={6} spacing={0.1}>
              <Stack direction="row" align="center">
                <AtSymbolIcon
                  style={{ width: "10px", height: "10px", color: "#2C5282" }}
                />
                <Text fontSize={8}>{curriculum.personalData.email}</Text>
              </Stack>
              <Stack direction="row" align="center">
                <PhoneIcon
                  style={{ width: "10px", height: "10px", color: "#2C5282" }}
                />
                <Text fontSize={8}>{curriculum.personalData.telefone}</Text>
              </Stack>
              <Stack direction="row" align="center">
                <AnnotationIcon
                  style={{ width: "10px", height: "10px", color: "#2C5282" }}
                />
                <Text fontSize={8}>{curriculum.personalData.linkedin}</Text>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.1} mt={8}>
              <Text fontSize={11} color="blue.700" fontWeight="medium">
                Objetivos
              </Text>
              <Text fontSize={9} color="gray.700" wordBreak="break-word">
                {curriculum.goals}
              </Text>
            </Stack>

            <Divider mt={3} />
          </Container>
        </Stack>
        <Flex w="30%" bg="blue.900" borderRightRadius="md" />
      </Flex>
    </Stack>
  );
}
