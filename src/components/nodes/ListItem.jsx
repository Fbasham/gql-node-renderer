import Wrapper from "../Wrapper";

export default function ListItem(props) {
  return (
    <li>
      {props.node.content.map((n) => (
        <Wrapper node={n} />
      ))}
    </li>
  );
}
