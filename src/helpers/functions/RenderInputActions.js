import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const RenderInputActions = ({ actions }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {actions &&
        Array.isArray(actions) &&
        actions.map((action, index) => (
          <Button
            variant={action.actionVariant}
            key={index}
            disabled={action.disabled}
            onClick={
              action.confirm
                ? () =>
                    setModal({
                      action: action.action,
                    })
                : action.action
            }
          >
            <div className="d-flex aic gap-2">{action.actionText}</div>
          </Button>
        ))}
    </>
  );
};

export default RenderInputActions;
