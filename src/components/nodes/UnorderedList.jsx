import Wrapper from "../Wrapper";
import { v4 as uuid } from "uuid";

export default function UnorderedList(props) {
  return (
    <ul>
      {props.node.content.map((n) => (
        <Wrapper key={uuid()} node={n} />
      ))}
    </ul>
  );
}
