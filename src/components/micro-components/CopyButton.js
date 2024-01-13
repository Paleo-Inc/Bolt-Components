import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = ({ onCopy, value, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };
  return (
    <CopyToClipboard onCopy={() => setCopied(true)} text={value}>
      <Button
        variant="outline-secondary"
        onClick={handleClick}
        className={`copy-button ${copied ? "copied" : ""}`}
      >
        <FeatherIcon
          icon={copied ? "check" : "clipboard"}
          className={`feather-icon ${copied ? "check" : ""}`}
          size="15px"
        />
      </Button>
    </CopyToClipboard>
  );
};
export { CopyButton };
