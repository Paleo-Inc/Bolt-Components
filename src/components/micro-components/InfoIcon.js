import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import BoltTooltip from "../components/BoltTooltip";
import BoltModal from "../components/BoltModal";

const InfoIcon = ({ tooltipText, modal, modalProps }) => {
  //   console.log(
  //     "INFO ICON -- tooltipText",
  //     tooltipText,
  //     "modal",
  //     modal,
  //     "modalProps",
  //     modalProps
  //   );
  const [modalVisible, setModalVisible] = useState(false);
  const handleIconClick = () => {
    if (modal) {
      setModalVisible(true);
    }
  };

  const icon = (
    <Button
      variant="transparent"
      size="sm"
      className="p-0 px-1 text-muted"
      onClick={handleIconClick}
    >
      {/* //Uncomment if error is fixed */}
      <FeatherIcon icon="info" size="16px" />
    </Button>
  );

  return (
    <>
      <div className="d-flex align-items-center">
        {tooltipText ? (
          <BoltTooltip content={tooltipText}>{icon}</BoltTooltip>
        ) : (
          icon
        )}
      </div>
      {modal && modalVisible && (
        <BoltModal
          title={tooltipText || ""}
          content={modal}
          {...modalProps}
          show={modalVisible}
          onHide={() => setModalVisible(false)}
        >
          {modal}
        </BoltModal>
      )}
    </>
  );
};

export default InfoIcon;
