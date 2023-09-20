import { useState } from "react";
import userData from "../constants/userData";
import base from "../constants/base";
import PreviewPage from "./PreviewPage";
import Sidebar from "./Sidebar";
function CvEditor() {
  const [currentCv, setCurrentCv] = useState(base);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCurrentCv((prevCurrentCv) => {
      return {
        ...prevCurrentCv,
        [name]: value,
      };
    });
  };

  const createSection = (sectionTitle) => {
    const newSection = {
      title: sectionTitle,
      details: [],
    };

    setCurrentCv((prevCurrentCv) => {
      return {
        ...prevCurrentCv,
        sections: [...prevCurrentCv.sections, newSection],
      };
    });
  };

  return (
    <main className="bg-slate-600 min-h-screen flex">
      <Sidebar
        cvInfo={currentCv}
        onCvChange={handleChange}
        createSection={createSection}
      />
      <PreviewPage cvInfo={currentCv} />
    </main>
  );
}

export default CvEditor;
