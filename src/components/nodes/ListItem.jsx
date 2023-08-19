import Wrapper from "../Wrapper";
import { v4 as uuid } from "uuid";

export default function ListItem(props) {
  return (
    <li>
      {props.node.content.map((n) => (
        <Wrapper key={uuid()} node={n} />
      ))}
    </li>
  );
}
