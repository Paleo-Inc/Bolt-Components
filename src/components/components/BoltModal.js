import React from "react";
import { Modal } from "react-bootstrap";
import { Helpers } from "../../helpers/functions/Helpers";
import BoltButton from "./BoltButton";

// This component renders a modal for file preview with customizable options

function BoltModal({ show, onHide, title, content, actions, size }) {
  const modalId = Helpers.ToKebabCase(title);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size ? size : null}
      aria-labelledby={modalId}
      centered
    >
      {title && (
        <Modal.Header closeButton>
          <Modal.Title id={modalId}>{title}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>{content}</Modal.Body>

      {Array.isArray(actions) && (
        <Modal.Footer>
          {actions.map((action, index) => (
            <React.Fragment key={index}>
              <BoltButton
                label={action.label}
                variant={action.variant}
                icon={action.icon}
                action={action.action}
                disabled={action.disabled}
                helper_text={action.helper_text}
                size={action.size}
                confirm={action.confirm}
              ></BoltButton>
            </React.Fragment>
          ))}
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default BoltModal;
