import { useState } from "react";
import userData from "../constants/userData";
import PreviewPage from "./PreviewPage";
import Sidebar from "./Sidebar";
function CvEditor() {
  const [currentCv, setCurrentCv] = useState(userData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCurrentCv((prevCurrentCv) => {
      return {
        ...prevCurrentCv,
        [name]: value,
      };
    });
  };

  return (
    <main className="bg-slate-600 min-h-screen flex">
      <Sidebar cvInfo={currentCv} onCvChange={handleChange} />
      <PreviewPage cvInfo={currentCv} />
    </main>
  );
}

export default CvEditor;
