import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyButton } from "../src/components/micro-components/CopyButton";
import {
  Col,
  Container,
  Row,
  Card,
  NavLink,
  NavItem,
  Form,
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
  const [selectedControlType, setSelectedControlType] = useState("text");
  console.log("controlStates", controlStates);

  // Initial state setup
  let initialState = {};

  inputProperties.forEach((prop) => {
    initialState[prop.prop] = prop.default_value;
  });

  // Function to initialize state for a new controlType
  const initializeControlState = (type) => {
    if (!controlStates[type]) {
      // Filter inputProperties to include only those with default_value = true
      const propertiesWithDefaultValueTrue = inputProperties.filter(
        (prop) => prop.default_value === true
      );
      // Create initial state object with properties having default_value = true
      let initialState = {};
      propertiesWithDefaultValueTrue.forEach((prop) => {
        initialState[prop.prop] = prop.default_value;
      });
      // Update the state with the initialState for the control type
      setControlStates((prevState) => ({
        ...prevState,
        [type]: { ...initialState },
      }));
    }
  };

  const getControlCodeTemplate = () => {
    // Start the template with the fixed controlType
    let template = `<BoltInput\n    controlType="${selectedControlType}"\n`;
    // Dynamically add properties from the controlStates for the selectedControlType
    const currentState = controlStates[selectedControlType];
    for (const property in currentState) {
      if (currentState.hasOwnProperty(property)) {
        template += `    ${property}="${currentState[property]}"\n`;
      }
    }
    // Close the template
    template += `  />`;
    return template;
  };

  const [controlCode, setControlCode] = useState(getControlCodeTemplate());

  useEffect(() => {
    // This function will run whenever selectedControlType or controlStates changes
    const updatedControl = getControlCodeTemplate();
    setControlCode(updatedControl);
  }, [selectedControlType, controlStates]); // Include controlStates in the dependency array

  // Function to handle the div click event
  const handleDivClick = (event) => {
    // Accessing the clicked div
    const clickedDiv = event.currentTarget;
    // Determine the new controlType
    const controlType = clickedDiv.id || clickedDiv.getAttribute("eventkey");
    // Update the selected control type
    setSelectedControlType(controlType);
    // Initialize state for the new control type if not already done
    initializeControlState(controlType);
    // If you need to update date-related properties, do it here
    // Example: updateState(someDateValue, 'dateProperty', controlType)
    // Update the control code
    setControlCode(getControlCodeTemplate());
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
    setControlCode(getControlCodeTemplate());
  };

  const handleInputChange = (newValue, controlType) => {
    setControlStates((prevStates) => ({
      ...prevStates,
      [controlType]: {
        ...prevStates[controlType],
        value: newValue, // Update the value for this specific control type
      },
    }));
  };

  return (
    <div
      className="main-content py-4 m-4"
      data-bs-spy="scroll"
      data-bs-target="#nav"
    >
      <Container fluid>
        <div className="mb-4">
          <Row>
            <Col xs={12} sm={12} md={2} className="mb-3 mb-md-0">
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
                    className="flex-md-column"
                  >
                    {controlTypes.map((control) => (
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
              className="smooth-scroll d-flex flex-column gap-3 mb-3 mb-sm-0 "
              xs={12}
              sm={6}
              md={5}
            >
              {controlTypes.map((control, controlIndex) => (
                <div
                  onClick={handleDivClick}
                  id={control.type}
                  className={
                    selectedControlType === control.type
                      ? "shadow-sm rounded sticky-top"
                      : "d-none"
                  }
                >
                  <Card className={`border m-0`} key={controlIndex}>
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
                        {...controlStates[control.type]}
                        controlType={control.type}
                        options={[controlStates[control.type]?.options].filter(
                          Boolean
                        )}
                      />
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>

            <Col xs={12} sm={6} md={5}>
              <div className="sticky-top">
                <div className="position-relative">
                  <SyntaxHighlighter
                    className="p-3 rounded"
                    language="javascript"
                  >
                    {controlCode}
                  </SyntaxHighlighter>
                  <CopyButton
                    className="position-absolute top-0 end-0 btn-sm m-1"
                    value={controlCode}
                  ></CopyButton>
                </div>
                <Card className="border">
                  <Accordion.Item>
                    <Card.Body className="border-bottom">
                      <div>
                        <Card.Title>Options</Card.Title>
                        <Card.Text>
                          These options reflect the component's prop attributes.
                        </Card.Text>
                      </div>
                    </Card.Body>
                    <Card.Body className="bg-light scrollable">
                      <Row>
                        {inputProperties.map((property, propIndex) => (
                          <Col
                            xs={property.dataType === "switch" ? 6 : 12}
                            sm="6"
                            md="6"
                            className=""
                            key={propIndex}
                          >
                            <BoltInput
                              label={property.prop}
                              controlType={property.dataType}
                              tooltip_text={property.description}
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
