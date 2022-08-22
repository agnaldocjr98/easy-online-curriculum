import { Button, Flex, Heading } from "@chakra-ui/react";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useCurriculum } from "src/redux/slices/curriculum";
import { MyDocument } from "../create-pdf";

export function Header() {
  const data = useSelector(useCurriculum);
  return (
    <Flex w="100%" h="10vh" bg="blue.900" shadow="lg">
      <Button onClick={() => alert(JSON.stringify(data))}>CLICKME</Button>
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
      {/* <Button onClick={() => alert(JSON.stringify(data.experience))}></Button>
      <Button onClick={() => ReactPDF.render(<MyDocument />, __dirname)}>
        CRIAR PDF
      </Button> */}
    </Flex>
  );
}
