import Wrapper from "../Wrapper";
import { v4 as uuid } from "uuid";

export default function Header(props) {
  let inner = props.node.content.map((n) => <Wrapper key={uuid()} node={n} />);

  switch (props.node.style) {
    case "h1":
      return <h1>{inner}</h1>;
    case "h2":
      return <h2>{inner}</h2>;
    case "h3":
      return <h3>{inner}</h3>;
    case "h4":
      return <h4>{inner}</h4>;
    case "h5":
      return <h5>{inner}</h5>;
    default:
      return <h6>{inner}</h6>;
  }
}
