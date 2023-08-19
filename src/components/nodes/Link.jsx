export default function Link(props) {
  return <a href={props.node.data.href}>{props.node.value}</a>;
}
