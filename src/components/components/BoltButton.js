import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import BoltTooltip from "./BoltTooltip";

const BoltButton = ({
  size,
  disabled,
  variant,
  icon,
  label,
  action,
  confirm,
  helper_text, // Accept helperText as a prop
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = () => {
    if (!confirm || isConfirmed) {
      action();
      if (confirm) setIsConfirmed(false);
    } else {
      setIsConfirmed(true);
    }
  };

  const renderButtonContent = (iconName, text) => (
    <div className="d-flex align-items-center gap-2">
      {iconName && <FeatherIcon size="15" icon={iconName} />}
      {text}
    </div>
  );

  const renderButton = () => (
    <Button
      size={size}
      disabled={confirm && isConfirmed ? true : disabled}
      variant={confirm && isConfirmed ? "secondary" : variant}
      onClick={handleClick}
    >
      {renderButtonContent(
        confirm && !isConfirmed ? icon : null,
        confirm && isConfirmed ? "Are you sure?" : label
      )}
    </Button>
  );

  return (
    <ButtonGroup aria-label="Confirmable button group">
      {helper_text ? (
        <BoltTooltip content={helper_text}>{renderButton()}</BoltTooltip>
      ) : (
        renderButton()
      )}

      {confirm && isConfirmed && (
        <>
          <Button
            size={size}
            variant="light"
            onClick={() => setIsConfirmed(false)}
          >
            {renderButtonContent(null, "No")}
          </Button>
          <Button size={size} variant="light" onClick={action}>
            {renderButtonContent(null, "Yes")}
          </Button>
        </>
      )}
    </ButtonGroup>
  );
};

export default BoltButton;
