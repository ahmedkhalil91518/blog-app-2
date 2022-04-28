import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write a comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button variant="danger" disabled={isTextareaDisabled}>
        {" "}
        {submitLabel}
      </Button>{" "}
      {hasCancelButton && (
        <Button type="button" variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
      )}
    </Form>
  );
};

export default CommentForm;
