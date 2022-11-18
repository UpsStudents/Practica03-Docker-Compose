import { Card } from "react-bootstrap";

export interface ContactProps {
  name: string;
  phoneNumber: string;
}

export const Contact: React.FC<ContactProps> = ({ name, phoneNumber }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{phoneNumber}</Card.Text>
      </Card.Body>
    </Card>
  );
};
