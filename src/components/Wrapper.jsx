import Header from "./nodes/Header";
import LineBreak from "./nodes/LineBreak";
import Link from "./nodes/Link";
import ListItem from "./nodes/ListItem";
import Paragraph from "./nodes/Paragraph";
import Text from "./nodes/Text";
import OrderedList from "./nodes/OrderedList";
import UnorderedList from "./nodes/UnorderedList";

const NODES = {
  header: Header,
  paragraph: Paragraph,
  link: Link,
  text: Text,
  "unordered-list": UnorderedList,
  "ordered-list": OrderedList,
  "list-item": ListItem,
  "line-break": LineBreak,
};

export default function Wrapper(props) {
  let Node = NODES[props.node.nodeType];
  return <Node node={props.node} />;
}
