import Form from "react-bootstrap/Form";
//Pending
const BoltForm = ({ children, name , loading, ...props }) => {
  return (
    <Form loading={loading} {...props}>
      {children}
    </Form>
  );
};

export { BoltForm };
