import { useId } from "react";
import Wrapper from "./Wrapper";

export default function Render(props) {
  return (
    <>
      {props.data.map((node) => (
        <Wrapper key={useId()} node={node} />
      ))}
    </>
  );
}
