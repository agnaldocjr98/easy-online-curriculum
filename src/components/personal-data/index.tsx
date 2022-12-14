import { Text, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalData, useCurriculum } from "src/redux/slices/curriculum";
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
  }

  return (
    <Stack w="100%" shadow="md" direction="column" rounded="md">
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

        <CheckCircleIcon
          style={{ width: "25px", height: "25px", color: "white" }}
        />
      </Stack>
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
            LinkedIn (Opcional)
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
      </Stack>
    </Stack>
  );
}
