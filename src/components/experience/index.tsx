import {
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  AddExperience,
  changeExperience,
  removeExperience,
  useCurriculum,
} from "src/redux/slices/curriculum";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/outline";
import moment from "moment";

export function Experience() {
  const curriculum = useSelector(useCurriculum);
  const dispatch = useDispatch();

  function handleRemoveExperience(id: number) {
    if (curriculum.experience.length === 1) return;
    dispatch(removeExperience(id));
  }

  function handleChangeCurrentJob(current: boolean) {}

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
          3 - Experiências
        </Text>

        <CheckCircleIcon
          style={{ width: "25px", height: "25px", color: "white" }}
        />
      </Stack>
      <Stack spacing={2} direction="column" p={4}>
        {curriculum.experience?.map((exp) => {
          return (
            <Stack
              key={exp.id}
              w="100%"
              p={4}
              rounded="sm"
              shadow="lg"
              spacing={2}
            >
              <FormControl>
                <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
                  Empresa
                </FormLabel>
                <Input
                  placeholder="Empresa"
                  fontSize={12}
                  size="sm"
                  type="text"
                  value={exp.company_name}
                  onChange={(e) =>
                    dispatch(
                      changeExperience({
                        id: exp.id,
                        key: "company_name",
                        value: e.target.value,
                      })
                    )
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
                  Cargo
                </FormLabel>
                <Input
                  placeholder="Cargo"
                  fontSize={12}
                  size="sm"
                  type="text"
                  value={exp.role_name}
                  onChange={(e) =>
                    dispatch(
                      changeExperience({
                        id: exp.id,
                        key: "role_name",
                        value: e.target.value,
                      })
                    )
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
                  Descrição do cargo
                </FormLabel>
                <Textarea
                  placeholder="Descrição do cargo"
                  fontSize={12}
                  size="sm"
                  value={exp.role_description}
                  onChange={(e) =>
                    dispatch(
                      changeExperience({
                        id: exp.id,
                        key: "role_description",
                        value: e.target.value,
                      })
                    )
                  }
                />
              </FormControl>
              <Stack direction={["column", "row"]} spacing={5}>
                <Checkbox
                  colorScheme="green"
                  checked={exp.current === "yes" ? true : false}
                  onChange={(e) =>
                    dispatch(
                      changeExperience({
                        id: exp.id,
                        key: "current",
                        value: e.target.checked ? "yes" : "no",
                      })
                    )
                  }
                >
                  <Text fontSize={12} color="gray.700" fontWeight="thin">
                    Trabalho Atual?
                  </Text>
                </Checkbox>
                <FormControl>
                  <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
                    Data de Início
                  </FormLabel>
                  <Input
                    placeholder="Data de Início"
                    fontSize={12}
                    size="sm"
                    type="date"
                    value={exp.ini_role}
                    onChange={(e) =>
                      dispatch(
                        changeExperience({
                          id: exp.id,
                          key: "ini_role",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700" fontWeight="thin" fontSize={12}>
                    Data de conclusão
                  </FormLabel>
                  <Input
                    disabled={exp.current === "yes"}
                    placeholder="Data de conclusão"
                    fontSize={12}
                    size="sm"
                    type="date"
                    value={exp.fin_role}
                    onChange={(e) =>
                      dispatch(
                        changeExperience({
                          id: exp.id,
                          key: "fin_role",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
              </Stack>

              <Stack
                pt={2}
                direction="row"
                spacing={2}
                align="center"
                justify="flex-end"
              >
                <TrashIcon
                  style={{ width: "20px", height: "20px", color: "red" }}
                />
                <Text
                  fontSize={13}
                  color="red.500"
                  onClick={() => handleRemoveExperience(exp.id)}
                >
                  Remover Experiência
                </Text>
              </Stack>
            </Stack>
          );
        })}
        <Stack
          px={4}
          w="100%"
          borderStyle="dashed"
          borderColor="blue.500"
          borderWidth={1}
          rounded="sm"
          h="50px"
          direction="row"
          align="center"
        >
          <PlusCircleIcon style={{ width: "20px", height: "20px" }} />
          <Text
            fontSize={14}
            color="blue.700"
            onClick={() => dispatch(AddExperience())}
          >
            Adicionar outra experiência profissional
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
