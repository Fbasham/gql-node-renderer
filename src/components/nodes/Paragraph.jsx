import Wrapper from "../Wrapper";
import { v4 as uuid } from "uuid";

export default function Paragraph(props) {
  return (
    <p>
      {props.node.content.map((n) => (
        <Wrapper key={uuid()} node={n} />
      ))}
    </p>
  );
}
