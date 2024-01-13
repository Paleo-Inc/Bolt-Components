import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Image from "react-bootstrap/Image";
// import FileTypes from "../../config/FileTypes";
import BoltModal from "../../components/components/BoltModal";
import { Helpers } from "../../helpers/functions/Helpers";
import BoltTooltip from "../../components/components/BoltTooltip";
import Carousel from "react-bootstrap/Carousel";
import Config from "../../config/Config";

const config = new Config();
const fileTypes = config.getFileTypes();

function RenderFilePreviews({ files }) {
  const [previewFile, setPreviewFile] = React.useState(false);
  const [fileUrls, setFileUrls] = React.useState({});
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const newFileUrls = {};
    files.forEach((file) => {
      if (file && file.type && file.type.startsWith("image/")) {
        newFileUrls[file.name] = URL.createObjectURL(file);
      }
    });
    setFileUrls(newFileUrls);
    return () => {
      Object.values(newFileUrls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleFileClick = (file, index) => {
    setPreviewFile(true);
    setSelectedFile(file);
    setCurrentIndex(index);
  };

  const renderCarouselItem = (file) => {
    if (file && file.type.startsWith("image/")) {
      return <Image className="rounded" fluid src={fileUrls[file.name]} />;
    } else {
      // Render the default icon or based on the file type
      const fileType = file.type;
      const fileTypeInfo = fileTypes[fileType];
      const icon = fileTypeInfo ? fileTypeInfo.icon : "file";
      return (
        <div className="text-center h-100 bg-light p-4 pb-5 rounded justify-content-center">
          <div className="mb-3">
            <FeatherIcon icon={icon} size="60" />
          </div>
          <div>{Helpers.TruncateText(file.name, 32)}</div>
          <div>{fileTypeInfo?.friendlyName}</div>
          <div>{fileTypeInfo?.description}</div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-2">
        {files.map((mappedFile, index) => {
          const fileType = mappedFile.type;
          const fileTypeInfo = fileTypes[fileType];
          const icon = fileTypeInfo ? fileTypeInfo.icon : "file";
          const extension = fileTypeInfo ? fileTypeInfo.extension : "";
          const isImage = mappedFile.type.startsWith("image/");
          const tooltipId = `tooltip-${index}`;
          const truncatedName = Helpers.TruncateText(mappedFile.name, 18);
          const imageUrl = fileUrls[mappedFile.name];

          const tooltipData = [
            { title: "Name", value: mappedFile.name },
            { title: "File type", value: mappedFile.type },
            { title: "Extension", value: extension },
          ];

          return (
            <BoltTooltip
              key={index}
              delay={2000}
              content={tooltipData}
              id={tooltipId}
            >
              <div
                className="d-flex aic gap-2 border p-2 rounded"
                onClick={() => handleFileClick(mappedFile, index)}
              >
                {isImage ? (
                  <Image
                    width={23}
                    height={23}
                    alt={mappedFile.name}
                    src={imageUrl}
                    rounded
                  />
                ) : (
                  <FeatherIcon icon={icon} size="19" />
                )}
                <div className="small">{truncatedName}</div>
              </div>
            </BoltTooltip>
          );
        })}
      </div>
      <BoltModal
        content={
          <>
            <Carousel
              interval={null}
              indicators={files.length < 2 ? false : true}
              controls={files.length < 2 ? false : true}
              activeIndex={currentIndex}
              onSelect={setCurrentIndex}
            >
              {files.map((file, index) => (
                <Carousel.Item key={index}>
                  {renderCarouselItem(file)}
                </Carousel.Item>
              ))}
            </Carousel>
          </>
        }
        show={previewFile}
        onHide={() => setPreviewFile(false)}
      />
    </>
  );
}

export { RenderFilePreviews };
