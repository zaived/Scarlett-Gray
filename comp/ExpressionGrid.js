import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

export default function ExpressionGrid({ expression }) {
  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0.8)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "10px",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      size: "40px",
    },
  };
  return (
    <SRLWrapper options={options}>
      <div className="card">
        <Image
          className="grid-img"
          src={"https:" + expression.fields.file.url}
          width={500}
          height={600}
        />
      </div>
    </SRLWrapper>
  );
}
