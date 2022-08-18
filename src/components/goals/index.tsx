import {
  Text,
  Stack,
  FormControl,
  Flex,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStep,
  setGoals,
  useCurriculum,
} from "src/redux/slices/curriculum";

export function Goals() {
  const curriculum = useSelector(useCurriculum);
  const dispatch = useDispatch();

  function handleValidGoalField() {
    if (!curriculum.goals) {
      alert('O campo "Objetivos" é obrigatório!!!');
      return;
    }
    dispatch(changeStep({ key: "goals", value: true }));
  }

  return (
    <Stack
      w="100%"
      shadow="md"
      direction="column"
      rounded="md"
      bg={curriculum.steps.personalData ? "gray.50" : "white"}
    >
      <Stack
        h="35px"
        bg="blue.900"
        roundedTop="md"
        alignItems="center"
        direction="row"
        justify="space-between"
        px={2}
      >
        <Text ml={2} fontWeight="semibold" fontSize={14} color="white">
          2 - Objetivos
        </Text>
        {curriculum.steps.goals && (
          <CheckCircleIcon
            style={{ width: "25px", height: "25px", color: "white" }}
          />
        )}
      </Stack>
      <Stack spacing={2} direction="column" p={4}>
        <FormControl>
          <Text fontSize={12} color="blue.900" mb={2}>
            Você deve indicar o cargo que você quer ocupar e a área em que quer
            trabalhar. O ideal é que essa informação seja igual ao cargo
            anunciado na vaga. Isso aumenta as chances de o seu currículo ser
            selecionado na primeira triagem.{" "}
            <strong>Seja direto e conciso</strong>
          </Text>
          <Textarea
            readOnly={curriculum.steps.goals}
            placeholder="Objetivo"
            fontSize={12}
            size="sm"
            value={curriculum.goals}
            onChange={(e) => dispatch(setGoals(e.target.value))}
          />
        </FormControl>
        <Stack direction="row" spacing={2} justify="flex-end">
          <Button
            disabled={!curriculum.steps.goals}
            colorScheme="blue"
            size="sm"
            fontWeight="medium"
            onClick={() => dispatch(changeStep({ key: "goals", value: false }))}
          >
            Alterar
          </Button>
          <Button
            disabled={curriculum.steps.goals}
            colorScheme="green"
            size="sm"
            fontWeight="medium"
            onClick={handleValidGoalField}
          >
            Continuar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
