import { useState } from "react";
import "./App.css";
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
    <div>
      <form>
        <label>{isOriginalTextLatin ? "lotincha" : "kirilcha"}</label>
        <textarea value={originalText} onChange={handleOnChange}></textarea>
        <button onClick={toggle} type="button"></button>
        <label>{isOriginalTextLatin ? "kirilcha" : "lotincha"}</label>
        <textarea value={translatedText}></textarea>
        <button onClick={copyToClipboard} type="button">Copy</button>
      </form>
    </div>
  );
}

export default App;
