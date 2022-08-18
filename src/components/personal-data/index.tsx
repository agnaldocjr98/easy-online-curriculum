import {
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStep,
  setPersonalData,
  useCurriculum,
} from "src/redux/slices/curriculum";
import { CheckCircleIcon } from "@heroicons/react/outline";

export function PersonalData() {
  const curriculum = useSelector(useCurriculum);
  const dispatch = useDispatch();

  function handleValidAllFields() {
    const { name, email, telefone } = curriculum.personalData;
    if (!name) {
      alert('O campo "Nome" é obrigatório!!!');
      return;
    }
    if (!email) {
      alert('O campo "Email" é obrigatório!!!');
      return;
    }
    if (!telefone) {
      alert('O campo "Telefone" é obrigatório!!!');
      return;
    }
    dispatch(changeStep({ key: "personalData", value: true }));
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
          1 - Dados Pessoais
        </Text>
        {curriculum.steps.personalData && (
          <CheckCircleIcon
            style={{ width: "25px", height: "25px", color: "white" }}
          />
        )}
      </Stack>
      <Stack spacing={2} direction="column" p={4}>
        <FormControl>
          <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
            Nome
          </FormLabel>
          <Input
            readOnly={curriculum.steps.personalData}
            placeholder="Nome"
            fontSize={12}
            size="sm"
            type="text"
            value={curriculum.personalData.name}
            onChange={(e) =>
              dispatch(setPersonalData({ key: "name", value: e.target.value }))
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
            Cargo Atual (Opcional)
          </FormLabel>
          <Input
            readOnly={curriculum.steps.personalData}
            placeholder="Cargo Atual"
            fontSize={12}
            size="sm"
            type="text"
            value={curriculum.personalData.current_role}
            onChange={(e) =>
              dispatch(
                setPersonalData({
                  key: "current_role",
                  value: e.target.value,
                })
              )
            }
          />
        </FormControl>
        <Stack direction={["column", "row"]}>
          <FormControl>
            <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
              E-mail
            </FormLabel>
            <Input
              readOnly={curriculum.steps.personalData}
              placeholder="Email"
              fontSize={12}
              size="sm"
              type="email"
              value={curriculum.personalData.email}
              onChange={(e) =>
                dispatch(
                  setPersonalData({ key: "email", value: e.target.value })
                )
              }
            />
          </FormControl>
          <FormControl w={["100%", "40%"]}>
            <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
              Telefone
            </FormLabel>
            <Input
              readOnly={curriculum.steps.personalData}
              placeholder="Telefone"
              fontSize={12}
              size="sm"
              as={InputMask}
              mask="(**)* ****-****"
              value={curriculum.personalData.telefone}
              onChange={(e) =>
                dispatch(
                  setPersonalData({ key: "telefone", value: e.target.value })
                )
              }
            />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
            LinkedIn (Opcional)
          </FormLabel>
          <Input
            readOnly={curriculum.steps.personalData}
            placeholder="LinkedIn"
            fontSize={12}
            size="sm"
            type="text"
            value={curriculum.personalData.linkedin}
            onChange={(e) =>
              dispatch(
                setPersonalData({ key: "linkedin", value: e.target.value })
              )
            }
          />
        </FormControl>

        <Stack direction="row" spacing={2} justify="flex-end">
          <Button
            disabled={!curriculum.steps.personalData}
            colorScheme="blue"
            size="sm"
            fontWeight="medium"
            onClick={() =>
              dispatch(changeStep({ key: "personalData", value: false }))
            }
          >
            Alterar
          </Button>
          <Button
            disabled={curriculum.steps.personalData}
            colorScheme="green"
            size="sm"
            fontWeight="medium"
            onClick={handleValidAllFields}
          >
            Continuar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
