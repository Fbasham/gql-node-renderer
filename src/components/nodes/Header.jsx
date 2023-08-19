import Wrapper from "../Wrapper";

export default function Header(props) {
  switch (props.node.style) {
    case "h1":
      return (
        <h1>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h1>
      );
    case "h2":
      return (
        <h2>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h2>
      );
    case "h3":
      return (
        <h3>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h3>
      );
    case "h4":
      return (
        <h4>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h4>
      );
    case "h5":
      return (
        <h5>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h5>
      );
    default:
      return (
        <h6>
          {props.node.content.map((n) => (
            <Wrapper node={n} />
          ))}
        </h6>
      );
  }
}
