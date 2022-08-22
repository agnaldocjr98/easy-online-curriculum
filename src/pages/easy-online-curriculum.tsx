import { Stack, useMediaQuery } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { InitialText } from "@/components/initial-text";
import { MiniCurriculum } from "@/components/mini-curriculum";
import { PersonalData } from "@/components/personal-data";
import { Goals } from "@/components/goals";
import { Experience } from "@/components/experience";

export default function CurriculoOnline() {
  const [curriculumVisible] = useMediaQuery("(min-width: 1280px)");
  return (
    <Stack w="100%" h="100%" direction="column">
      <Header />

      <Stack direction={["column", "row"]} w="100%" px={[8, 48]} pt={4}>
        <Stack flex={1} direction="column" pr={4} spacing={4}>
          <InitialText />
          <PersonalData />
          <Goals />
          <Experience />
        </Stack>

        {curriculumVisible && (
          <Stack w="40%" height="80vh">
            <MiniCurriculum />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
