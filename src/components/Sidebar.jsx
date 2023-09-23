import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { RiUser3Fill } from "react-icons/ri";
import AddButton from "./AddButton";
import DetailsCard from "./DetailsCard";

function Sidebar({
  cvInfo,
  onBasicInfoChange,
  onSectionDetailsChange,
  pushToSection,
  onDeleteClick,
}) {
  // Create an algorithm for linkedin input, where it makes it appear in format linkedin.com/in/cristobalnpe/,
  //in this case user should only type 'cristobalnpe' and the rest should  appear by itself in the preview page.

  //Maybe uppercase the first letter of name/lastnames too
  //Look for how to include

  const sectionAccordionElements = cvInfo.sections.map((section) => (
    <AccordionItem
      key={section.title}
      aria-label={section.title}
      title={section.title}
    >
      {section.details.length === 0 && (
        <h1 className="text-sm text-center my-4">
          Agrege nuevas entradas a {section.title}
        </h1>
      )}
      {section.details.map((detail) => (
        <DetailsCard
          fromSection={section.title}
          key={detail.id}
          {...detail}
          handleDelete={onDeleteClick}
          handleChange={onSectionDetailsChange}
        />
      ))}
      <div className="flex justify-end mt-3">
        <AddButton pushToSection={pushToSection} sectionTitle={section.title} />
      </div>
    </AccordionItem>
  ));

  const basicInfoInputElements = Object.keys(cvInfo.basicInfo).map((info) => {
    const property = cvInfo.basicInfo[info];
    return (
      <Input
        key={info}
        type={info === "email" ? "email" : "text"}
        radius="sm"
        label={property.label}
        name={info}
        value={property.value}
        onChange={onBasicInfoChange}
        className="text-slate-700 mb-2"
      />
    );
  });

  return (
    <nav className="no-scrollbar scroll-auto flex flex-col bg-gradient-to-tl from-slate-200 to-slate-300 max-w-[25rem] min-w-[20rem] w-1/4 drop-shadow-xl p-4 gap-5 items-center rounded-r-2xl h-full min-h-screen max-h-screen overflow-scroll ">
      <h1 className="text-2xl my-4 font-black tracking-wide ">CVGenerator</h1>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Información Básica"
          indicator={<RiUser3Fill className="text-slate-900 text-xl" />}
        >
          {basicInfoInputElements}
        </AccordionItem>
        {sectionAccordionElements}
      </Accordion>
    </nav>
  );
}

export default Sidebar;
