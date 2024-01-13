import Form from "react-bootstrap/Form";
//Pending
const BoltForm = ({ children, loading, ...props }) => {
  return (
    <Form loading={loading} {...props}>
      {children}
    </Form>
  );
};

export { BoltForm };
