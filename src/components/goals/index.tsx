import { Text, Stack, FormControl, Flex, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalData, useCurriculum } from "src/redux/slices/curriculum";

export function Goals() {
  const curriculum = useSelector(useCurriculum);
  const dispatch = useDispatch();

  return (
    <Stack w="100%" shadow="md" direction="column" rounded="md">
      <Flex h="40px" bg="blue.700" roundedTop="md" alignItems="center">
        <Text ml={4} fontWeight="semibold" fontSize={15} color="white">
          2 - Objetivos
        </Text>
      </Flex>
      <Stack spacing={2} direction="column" p={4}>
        <FormControl>
          <Text fontSize={12} color="gray.700" mb={2}>
            você deve indicar o cargo que você quer ocupar e a área em que quer
            trabalhar. O ideal é que essa informação seja igual ao cargo
            anunciado na vaga. Isso aumenta as chances de o seu currículo ser
            selecionado na primeira triagem. Seja direto e conciso: nível e área
          </Text>
          <Textarea
            placeholder="Objetivo"
            fontSize={12}
            size="sm"
            value={curriculum.personalData.name}
            onChange={(e) =>
              dispatch(setPersonalData({ key: "name", value: e.target.value }))
            }
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}
