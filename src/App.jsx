import { useState } from "react";
import "./App.css";
import "./Responsive.css";
import Translator from "lotin-kirill";

function App() {
  const translator = new Translator();

  const [isOriginalTextLatin, setIsOriginalTextLatin] = useState(true);
  const [originalText, setOriginalText] = useState("");

  const translatedText = isOriginalTextLatin
    ? translator.textToCyrillic(originalText)
    : translator.textToLatin(originalText);

  const toggle = () => {
    setIsOriginalTextLatin(!isOriginalTextLatin);
    setOriginalText("");
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    setOriginalText(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
  };

  return (
    <div className="container">
      <h1>
        Ushbu dastur matiningizni <span>LOTINDAN KIRILGA</span> yoki <b>KIRILDAN LOTINGA</b> o'girib beradi
      </h1>

      <form>
        <div className="header">
          <textarea value={originalText} onChange={handleOnChange} className="st" placeholder="Nimadir yozing ..."></textarea>
          <div className="buttons">
            <button onClick={toggle} type="button" className="btn btn-primary arrow"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>
            <button onClick={copyToClipboard} type="button" className="btn btn-danger copy"><i class="fa-regular fa-copy"></i></button>
          </div>
          <textarea value={translatedText} className="nd" placeholder="Natija"></textarea>
        </div>

        <div className="footer">
          <label className="lotin">{isOriginalTextLatin ? "Lotincha" : "Kirilcha"}</label>
          <label className="kiril">{isOriginalTextLatin ? "Kirilcha" : "Lotincha"}</label>
        </div>

      </form>

    </div>
  );
}

export default App;
