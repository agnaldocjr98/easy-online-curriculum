import { Heading, Stack, Text } from "@chakra-ui/react";

export function InitialText() {
  return (
    <Stack direction="column" spacing={4} mt={4}>
      <Text fontWeight="medium" fontSize="2xl" color="gray.700">
        Gerador de Currículo Grátis
      </Text>
      <Text color="gray.600">
        Use o nosso gerador de currículo online para criar seu CV em poucos
        minutos, de forma simples, gratuita e sem cadastro. Fazer um Curriculum
        Vitae online nunca foi tão fácil.
      </Text>
      <Text color="gray.600">
        Preencha os campos e quando terminar poderá baixar seu curriculum vitae
        com fotografia
      </Text>
    </Stack>
  );
}
