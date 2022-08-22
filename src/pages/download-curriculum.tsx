import { MyDocument } from "@/components/create-pdf";
import { PDFDownloadLink, renderToFile } from "@react-pdf/renderer";

export default function DownloadCurriculum() {
  return (
    <div>
      <h1>PARABÉNS SEU CURRICULO ESTÁ PRONTO</h1>
      <div>
        <PDFDownloadLink document={<MyDocument />} fileName="curriculo.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   await renderToFile(<MyDocument />, `c:/temp/example.pdf`);
//   <PDFDownloadLink document={<MyDocument />} fileName="curriculo.pdf">
//     {({ blob, url, loading, error }) =>
//       loading ? "Loading document..." : "Download now!"
//     }
//   </PDFDownloadLink>;
//   return {
//     props: {},
//   };
// }
