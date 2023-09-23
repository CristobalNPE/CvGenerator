import { useState } from "react";
import base from "../constants/base2";
import PreviewPage from "./PreviewPage";
import Sidebar from "./Sidebar";
import { v4 as uuid } from "uuid";

function CvEditor() {
  const [currentCv, setCurrentCv] = useState(base);

  const handleDetailsDelete = (id, fromSection) => {
    setCurrentCv((prevCurrentCv) => ({
      ...prevCurrentCv,
      sections: prevCurrentCv.sections.map((section) => {
        if (section.title === fromSection) {
          return {
            ...section,
            details: section.details.filter((detail) => detail.id !== id),
          };
        }
        return section;
      }),
    }));
  };

  const handlePushDetailsToSection = (sectionName) => {
    setCurrentCv((prevCurrentCv) => ({
      ...prevCurrentCv,
      sections: prevCurrentCv.sections.map((section) => {
        if (section.title === sectionName) {
          return {
            ...section,
            details: [
              ...section.details,
              { id: uuid(), title: "", description: "", from: "", until: "" },
            ],
          };
        }
        return section;
      }),
    }));
  };

  const handleBasicInfoChange = (event) => {
    const { name, value } = event.target;
    setCurrentCv((prevCurrentCv) => ({
      ...prevCurrentCv,
      basicInfo: {
        ...prevCurrentCv.basicInfo,
        [name]: { ...prevCurrentCv.basicInfo[name], value: value },
      },
    }));
  };

  const handleSectionDetailsChange = (event, sectionName, currentDetailId) => {
    const { name, value } = event.target;

    setCurrentCv((prevCurrentCv) => ({
      ...prevCurrentCv,
      sections: prevCurrentCv.sections.map((section) => {
        if (section.title === sectionName) {
          return {
            ...section,
            details: section.details.map((detail) => {
              if (detail.id === currentDetailId) {
                return {
                  ...detail,
                  [name]: value,
                };
              }
              return detail;
            }),
          };
        }
        return section;
      }),
    }));
  };

  // const createSection = (sectionTitle) => {
  //   const newSection = {
  //     title: sectionTitle,
  //     details: [],
  //   };

  //   setCurrentCv((prevCurrentCv) => {
  //     return {
  //       ...prevCurrentCv,
  //       sections: [...prevCurrentCv.sections, newSection],
  //     };
  //   });
  // };

  return (
    <main className="bg-gradient-to-r from-slate-600 to-slate-800 h-full min-h-screen flex">
      <Sidebar
        cvInfo={currentCv}
        onBasicInfoChange={handleBasicInfoChange}
        onDeleteClick={handleDetailsDelete}
        onSectionDetailsChange={handleSectionDetailsChange}
        pushToSection={handlePushDetailsToSection}
      />
      <PreviewPage cvInfo={currentCv} />
    </main>
  );
}

export default CvEditor;
