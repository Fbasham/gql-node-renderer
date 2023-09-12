import { data } from "./data/r.json";
import Render from "./components/Render";
import { useState } from "react";
import './index.css'

function App() {
  let project = data.scLabsPagev1ByPath?.item?.scLabProjectUpdates?.[0];
  let fragments = project.scFragments?.[0];
  let enFragments = fragments.scContentEn?.json;
  let frFragments = fragments.scContentFr?.json;

  let [lang, setLang] = useState("en");

  return (
    <div className="mx-auto max-w-[900px] my-10"> 
      <button className='bg-purple-900 px-2 py-1 rounded-sm text-white' onClick={() => setLang(lang === "en" ? "fr" : "en")}>
        {lang === "en" ? "fr" : "en"}
      </button>
      <div className="prose mt-5 max-w-[750px]">
        <Render data={lang === "en" ? enFragments : frFragments} />
      </div>
    </div>
  );
}

export default App;
