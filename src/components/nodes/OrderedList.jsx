import Wrapper from "../Wrapper";

export default function UnorderedList(props) {
  return (
    <ol>
      {props.node.content.map((n) => (
        <Wrapper node={n} />
      ))}
    </ol>
  );
}
