import Wrapper from "./Wrapper";
import { v4 as uuid } from "uuid";

export default function Render(props) {
  return (
    <>
      {props.data.map((node) => (
        <Wrapper key={uuid()} node={node} />
      ))}
    </>
  );
}
