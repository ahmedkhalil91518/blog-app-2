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
      <form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write a comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger"  type="submit"  disabled={isTextareaDisabled}>
          {" "}
          {submitLabel}
        </Button>{" "}
        {hasCancelButton && (
          <Button type="submit" variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </form>
  );
};

export default CommentForm;
