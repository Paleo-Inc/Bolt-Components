import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import CustomImage from "../micro-components/Image";

const defaultDescription =
  "There's no going back after you've completed this action.";

export default function ConfirmActionModal({
  onAction,
  onCancel,
  title = "Are you sure?",
  description = defaultDescription,
  type = "confirm",
  image,
  ...props
}) {
  const handleAction = () => {
    if (onAction) onAction();
    if (onCancel) onCancel();
  };

  const renderContent = () => {
    return (
      <>
        {type === "confirm" && (
          <>
            <h4 className="mb-2">{title}</h4>
            <div>{description}</div>
            {image && (
              <div className="text-center">
                <CustomImage src={image} width={180} alt="Confirmation" />
              </div>
            )}
          </>
        )}

        {type === "delete" && (
          <div className="text-secondary">{description}</div>
        )}
      </>
    );
  };

  return (
    <Modal size="sm" show={true} onHide={onCancel} centered {...props}>
      <Modal.Body className="border rounded">
        <h2 className="mb-3">{title}</h2>
        <div className="mb-4">{renderContent()}</div>
        <div className="d-flex gap-2 float-end">
          <Button size="sm" variant="light" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant={type === "confirm" ? "primary" : "danger"}
            size="sm"
            onClick={handleAction}
          >
            {type === "confirm" ? "Confirm" : "Delete"}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

ConfirmActionModal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onAction: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["confirm", "delete"]),
  image: PropTypes.string,
};
