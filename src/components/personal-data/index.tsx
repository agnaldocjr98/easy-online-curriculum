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
import { setPersonalData, useCurriculum } from "src/redux/slices/curriculum";

export function PersonalData() {
  const curriculum = useSelector(useCurriculum);
  const dispatch = useDispatch();

  return (
    <Stack w="100%" shadow="md" direction="column" rounded="md">
      <Flex h="40px" bg="blue.700" roundedTop="md" alignItems="center">
        <Text ml={4} fontWeight="semibold" fontSize={15} color="white">
          1 - Dados Pessoais
        </Text>
      </Flex>
      <Stack spacing={2} direction="column" p={4}>
        <FormControl>
          <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
            Nome
          </FormLabel>
          <Input
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
            LinkedIn
          </FormLabel>
          <Input
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

        <Flex justify="flex-end">
          <Button
            colorScheme="green"
            size="sm"
            fontWeight="medium"
            onClick={() => alert(JSON.stringify(curriculum))}
          >
            Continuar
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}
