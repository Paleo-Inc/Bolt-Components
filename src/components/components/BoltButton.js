import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import BoltTooltip from "./BoltTooltip";

const BoltButton = ({
  size,
  disabled,
  variant,
  label,
  onClick,
  active,
  icon,
  confirm,
  helper_text,
  id,
  href,
  type,
  loading,
  className,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmationButtons, setShowConfirmationButtons] = useState(false);
  label = label || "Button";
  const iconSize = "15";
  console.log("Confirmed: ", isConfirmed);
  console.log("showConfirmationButtons", showConfirmationButtons);

  const handleClick = () => {
    if (confirm) {
      // If confirmation is required, only show the confirmation buttons
      setShowConfirmationButtons(true);
    } else {
      // If no confirmation is needed, check if onClick is a function
      if (typeof onClick === "function") {
        onClick();
      } else {
        console.error("Error: The provided onClick is not a function.");
      }
    }
  };

  const mainButton = () => (
    <Button
      size={size}
      active={active}
      id={id}
      type={confirm ? null : type}
      href={href}
      disabled={disabled || (loading && true)}
      variant={variant}
      onClick={handleClick}
      className={className}
    >
      <div className="d-flex align-items-center gap-2">
        {icon && <FeatherIcon size={iconSize} icon={icon} />}
        {label}
        {loading && (
          <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </Button>
  );

  // const handleConfirmation = (confirmation) => {
  //   if (confirmation) {
  //     if (type === "submit") {
  //       // Programmatically submit the form
  //       const form = event.target.closest("form");
  //       if (form) {
  //         form.submit();
  //       }
  //     } else if (typeof onClick === "function") {
  //       onClick();
  //     }
  //   }
  //   // Reset confirmation state
  //   setIsConfirmed(false);
  //   setShowConfirmationButtons(false);
  // };

  const renderConfirmButtons = () => (
    <div>
      <div className="mb-1">Are you sure?</div>
      <ButtonGroup aria-label="Confirmable button group">
        <Button
          size={size}
          variant="light"
          onClick={() => {
            setIsConfirmed(false);
            setShowConfirmationButtons(false);
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span>No </span>
            <FeatherIcon size={iconSize} icon={"x"} />
          </div>
        </Button>
        <Button
          size={size}
          variant="light"
          type={type}
          onClick={() => {
            if (onClick) {
              onClick();
              setIsConfirmed(true);
              setShowConfirmationButtons(false);
            }
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span>Yes </span>
            <FeatherIcon size={iconSize} icon={"check"} />
          </div>
        </Button>
      </ButtonGroup>
    </div>
  );

  return (
    <>
      {helper_text
        ? !showConfirmationButtons && (
            <BoltTooltip content={helper_text}>{mainButton()}</BoltTooltip>
          )
        : !showConfirmationButtons && mainButton()}
      {confirm && showConfirmationButtons && renderConfirmButtons()}
    </>
  );
};

export default BoltButton;
