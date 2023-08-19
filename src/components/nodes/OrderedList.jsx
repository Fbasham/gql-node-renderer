import Wrapper from "../Wrapper";
import { v4 as uuid } from "uuid";

export default function UnorderedList(props) {
  return (
    <ol>
      {props.node.content.map((n) => (
        <Wrapper key={uuid()} node={n} />
      ))}
    </ol>
  );
}
