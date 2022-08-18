import { Container, Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { InitialText } from "@/components/initial-text";
import { MiniCurriculum } from "@/components/mini-curriculum";
import { PersonalData } from "@/components/personal-data";
import { Goals } from "@/components/goals";

export default function CurriculoOnline() {
  const [mobile] = useMediaQuery("(max-width: 680px)");
  return (
    <Box w="100%" h="100%">
      <Header />
      <Box w="100%" display="flex" px={48} pt={8}>
        <Stack flex={1} direction="column" pr={4} spacing={4}>
          <InitialText />
          <PersonalData />
          <Goals />
        </Stack>
        <MiniCurriculum />
      </Box>
    </Box>
  );
}
