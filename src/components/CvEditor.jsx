import { useState } from "react";
import userData from "../constants/userData";
import base from "../constants/base2";
import PreviewPage from "./PreviewPage";
import Sidebar from "./Sidebar";
function CvEditor() {
  const [currentCv, setCurrentCv] = useState(base);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCurrentCv((prevCurrentCv) => ({
      ...prevCurrentCv,
      basicInfo: {
        ...prevCurrentCv.basicInfo,
        [name]: { ...prevCurrentCv.basicInfo[name], value: value },
      },
    }));
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
    <main className="bg-slate-700 h-full min-h-screen flex">
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
