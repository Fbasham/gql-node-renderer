import Wrapper from "../Wrapper";

export default function UnorderedList(props) {
  return (
    <ul>
      {props.node.content.map((n) => (
        <Wrapper node={n} />
      ))}
    </ul>
  );
}
