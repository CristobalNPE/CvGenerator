import { Input } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RiUser3Fill } from "react-icons/ri";
import { Button, Tooltip } from "@nextui-org/react";

function Sidebar({ cvInfo, onCvChange, createSection }) {
  return (
    <nav className=" flex flex-col bg-slate-400 max-w-[25rem] min-w-[20rem] w-1/4 drop-shadow-xl p-4 gap-5 items-center rounded-r-2xl h-full min-h-screen ">
      <h1 className="text-2xl my-4 font-black tracking-wide ">CVGenerator</h1>

      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Información Básica"
          indicator={<RiUser3Fill className="text-slate-900 text-xl" />}
        >
          {Object.keys(cvInfo.basicInfo).map((info) => {
            const property = cvInfo.basicInfo[info];
            // console.log({ info, property });
            return (
              <Input
                key={info}
                type={info === "email" ? "email" : "text"}
                radius="sm"
                label={property.label}
                name={info}
                value={property.value}
                onChange={onCvChange}
                className="text-slate-700 mb-2"
              />
            );
          })}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
        ></AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion 3"
        ></AccordionItem>
      </Accordion>

      <div>
        <h1 className="text-lg font-semibold">Secciones:</h1>
        {cvInfo.sections.map((section) => (
          <p key={section.title}>{section.title}</p>
          // Here it should also show the added details on each section with buttons to make it editable.
          // Maybe just make them input
        ))}
      </div>

      <Tooltip content="Add a section for testing." closeDelay={100}>
        <Button
          size="md"
          radius="md"
          color="primary"
          variant="ghost"
          onClick={() => createSection("Cute Section")}
        >
          TEST add new section
        </Button>
      </Tooltip>
    </nav>
  );
}

export default Sidebar;
