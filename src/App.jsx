import "./App.css";
import { data } from "./data/r.json";
import Render from "./components/Render";
import { useState } from "react";

function App() {
  let project = data.scLabsPagev1ByPath?.item?.scLabProjectUpdates?.[0];
  let fragments = project.scFragments?.[0];
  let enFragments = fragments.scContentEn?.json;
  let frFragments = fragments.scContentFr?.json;

  let [lang, setLang] = useState("en");

  return (
    <>
      <button onClick={() => setLang(lang === "en" ? "fr" : "en")}>
        {lang === "en" ? "fr" : "en"}
      </button>
      <Render data={lang === "en" ? enFragments : frFragments} />
    </>
  );
}

export default App;
