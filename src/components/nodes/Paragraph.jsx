import Wrapper from "../Wrapper";

export default function Paragraph(props) {
  return (
    <p>
      {props.node.content.map((n) => (
        <Wrapper node={n} />
      ))}
    </p>
  );
}
