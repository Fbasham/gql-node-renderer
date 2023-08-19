import { v4 as uuid } from "uuid";

import Header from "./nodes/Header";
import LineBreak from "./nodes/LineBreak";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Text from "./nodes/Text";
import UnorderedList from "./nodes/OrderedList";
import Link from "./nodes/Link";

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

export default function Recur(props) {
  let content = props.node?.content;
  const Node = NODES[props.node.nodeType];
  return (
    <>
      {content && content.length ? (
        <Node key={uuid()} node={props.node}>
          {content.map((node) => (
            <Recur key={uuid()} node={node} />
          ))}
        </Node>
      ) : (
        <Node key={uuid()} node={props.node}></Node>
      )}
    </>
  );
}
