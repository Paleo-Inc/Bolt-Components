import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const BoltTooltip = ({ id, content, placement, children, focus, delay }) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <div key={index} className="text-start">
          <div className="text-uppercase text-secondary fw-medium">
            {item.title}
          </div>
          <div>{item.value}</div>
        </div>
      ));
    } else if (typeof content === "string") {
      return <div>{content}</div>;
    }
  };

  // Ensure that children is a single React element
  const child = React.Children.only(children);

  return (
    <OverlayTrigger
      placement={placement}
      trigger={focus}
      delay={{ show: delay, hide: 60 }}
      overlay={
        <Tooltip>
          <div id={id || "BoltTooltip"} className="d-flex flex-column gap-2">
            {renderContent()}
          </div>
        </Tooltip>
      }
      className="shadow-sm"
    >
      {React.cloneElement(child)}
    </OverlayTrigger>
  );
};

export default BoltTooltip;
