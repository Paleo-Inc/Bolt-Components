import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  NavLink,
  NavItem,
  Form,
  Alert,
  Nav,
  Accordion,
} from "react-bootstrap";
import { BoltInput } from "../src/wrappers/BoltInput";
import Config from "../src/config/Config";
import { Helpers } from "../src/helpers/functions/Helpers";

const config = new Config();
const controlTypes = config.getControlTypes();
const inputProperties = config.getInputProperties();

export default function Inputs() {
  // Dynamic state object for each controlType
  const [controlStates, setControlStates] = useState({});
  const [selectedControlType, setSelectedControlType] = useState("");
  console.log("selectedControlType", selectedControlType);

  // Function to initialize state for a new controlType
  const initializeControlState = (type) => {
    if (!controlStates[type]) {
      setControlStates((prevState) => ({
        ...prevState,
        [type]: {
          isInvalid: false,
          placeholder: "",
          rows: null,
          min: null,
          max: null,
          errorMessageIfInvalid: "",
          label: "",
          helper_text: "",
          copy: false,
          copyValue: "",
          minRows: null,
          tooltip_text: "",
          pre_text: "",
          post_text: "",
          noLabel: false,
          modal: false,
          pre_text: "",
          post_text: "",
          flush: false,
          actions: "",
          size: "",
          options: "",
          disabled: false,
          step: null,
          floatingLabel: false,
          minCharacters: null,
          maxCharacters: null,
          hiddenValue: false,
          textIfTrue: "",
          textIfFalse: "",
          required: false,
          showDefaultValidator: false,
          multiple: false,
          readOnly: false,
          plaintext: false,
        },
      }));
    }
  };

  const [controlCode, setControlCode] = useState(`
    <BoltInput
      controlType="${selectedControlType}"
      label="Assistant name"
      placeholder="Assistant name"
      name="name"
    ></BoltInput>
  `);

  console.log("Control code", controlCode);

  useEffect(() => {
    // This function will run whenever selectedControlType changes
    const updatedControl = `
      <BoltInput
        controlType="${selectedControlType}"
        label="Updated Assistant name"
        placeholder="Updated Assistant name"
        name="updatedName"
      ></BoltInput>
    `;
    setControlCode(updatedControl);
  }, [selectedControlType]); // Dependency array

  const updateControlType = (newType) => {
    setSelectedControlType(newType);
  };

  // Function to update state based on input type and controlType
  const updateState = (value, property, controlType) => {
    // Ensure the state for this controlType is initialized
    initializeControlState(controlType);
    console.log("Updating state for", controlType, property, value);

    // Update the specific property for the given controlType
    setControlStates((prevStates) => ({
      ...prevStates,
      [controlType]: {
        ...prevStates[controlType],
        [property]: value,
      },
    }));
  };

  // Function to handle the div click event
  const handleDivClick = (event) => {
    // Accessing the clicked div
    const clickedDiv = event.currentTarget;
    // Update the selectedControlType state with the id of the clicked div
    const controlType =
      event.currentTarget.id || clickedDiv.getAttribute("eventkey");
    setSelectedControlType(controlType);
    setControlCode(controlType);
  };

  const alert = (
    <Alert
      className="mb-2"
      variant={selectedControlType ? "primary" : "warning"}
    >
      {selectedControlType ? (
        <>
          You are now controlling the{" "}
          <u className="fw-bold">{selectedControlType}</u> control type input
        </>
      ) : (
        "Select a control type to control the props"
      )}
    </Alert>
  );

  return (
    <div
      className="main-content py-4 m-4"
      data-bs-spy="scroll"
      data-bs-target="#nav"
    >
      <Container fluid>
        <div className="mb-4">
          <Row>
            <Col xs={0} lg={2} className="d-none d-lg-block">
              <Card className="border sticky-top">
                <Card.Header className="border-bottom">
                  Quick navigation
                </Card.Header>
                <Card.Body className="px-2 py-3">
                  <Nav
                    activeKey={selectedControlType}
                    variant="pills"
                    id="#nav"
                    onSelect={setSelectedControlType}
                    className="flex-column"
                  >
                    {controlTypes.map((control, controlIndex) => (
                      <NavItem key={control.type}>
                        <NavLink
                          href={`#${control.type}`}
                          eventKey={control.type}
                        >
                          {Helpers.CapitalizeWords(control.type)}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="smooth-scroll d-flex flex-column gap-3"
              xs={6}
              lg={5}
            >
              {controlTypes.map((control, controlIndex) => (
                <div
                  onClick={handleDivClick}
                  id={control.type}
                  className={
                    selectedControlType === control.type
                      ? "shadow-sm rounded"
                      : ""
                  }
                >
                  <Card className="border m-0" key={controlIndex}>
                    <Card.Header className="border-bottom">
                      <div className="d-flex justify-content-between aic">
                        {Helpers.CapitalizeWords(control.type)}
                        <Form.Check
                          readOnly
                          checked={
                            selectedControlType === control.type ? true : false
                          }
                          type="radio"
                        />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <BoltInput
                        label={controlStates[control.type]?.label}
                        controlType={control.type}
                        copy={controlStates[control.type]?.copy}
                        isInvalid={controlStates[control.type]?.isInvalid}
                        placeholder={controlStates[control.type]?.placeholder}
                        helper_text={controlStates[control.type]?.helper_text}
                        noLabel={controlStates[control.type]?.noLabel}
                        min={controlStates[control.type]?.min}
                        modal={controlStates[control.type]?.modal}
                        max={controlStates[control.type]?.max}
                        tooltip_text={controlStates[control.type]?.tooltip_text}
                        errorMessageIfInvalid={
                          controlStates[control.type]?.errorMessageIfInvalid
                        }
                        minRows={controlStates[control.type]?.minRows}
                        rows={controlStates[control.type]?.rows}
                        copyValue={controlStates[control.type]?.copyValue}
                        pre_text={controlStates[control.type]?.pre_text}
                        post_text={controlStates[control.type]?.post_text}
                        flush={controlStates[control.type]?.flush}
                        actions={controlStates[control.type]?.actions}
                        size={controlStates[control.type]?.size}
                        disabled={controlStates[control.type]?.disabled}
                        step={controlStates[control.type]?.step}
                        floatingLabel={
                          controlStates[control.type]?.floatingLabel
                        }
                        options={[controlStates[control.type]?.options].filter(
                          Boolean
                        )}
                        minCharacters={
                          controlStates[control.type]?.minCharacters
                        }
                        maxCharacters={
                          controlStates[control.type]?.maxCharacters
                        }
                        hiddenValue={controlStates[control.type]?.hiddenValue}
                        textIfTrue={controlStates[control.type]?.textIfTrue}
                        textIfFalse={controlStates[control.type]?.textIfFalse}
                        required={controlStates[control.type]?.required}
                        showDefaultValidator={
                          controlStates[control.type]?.showDefaultValidator
                        }
                        multiple={controlStates[control.type]?.multiple}
                        readOnly={controlStates[control.type]?.readOnly}
                      />
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>

            <Col xs={6} lg={5}>
              <div className="sticky-top">
                {alert}
                <div>
                  <BoltInput
                    controlType={"textarea"}
                    minRows={1}
                    noLabel
                    value={controlCode}
                    copy
                  ></BoltInput>
                </div>
                <Card className="border">
                  <Accordion.Item>
                   
                    <Card.Body className="border-bottom">
                      <div>
                        <Card.Title>Options</Card.Title>
                        <Card.Text>These options reflect the component's prop attributes.</Card.Text>
                      </div>
                    </Card.Body>
                    <Card.Body className="bg-light scrollable">
                      <Row>
                        {inputProperties.map((property, propIndex) => (
                          <Col xs="12" md="6" className="" key={propIndex}>
                            <BoltInput
                              label={property.prop}
                              controlType={property.dataType}
                              value={
                                controlStates[selectedControlType]
                                  ? controlStates[selectedControlType][
                                      property.prop
                                    ]
                                  : ""
                              }
                              onChange={(e) =>
                                updateState(
                                  property.dataType === "switch"
                                    ? e.target.checked
                                    : e.target.value,
                                  property.prop,
                                  selectedControlType
                                )
                              }
                            />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Accordion.Item>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
