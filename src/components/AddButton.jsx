import { Button, Tooltip } from "@nextui-org/react";
import { RiAddFill } from "react-icons/ri";

function AddButton({ sectionTitle, pushToSection }) {
  return (
    <Tooltip
      closeDelay={100}
      color="foreground"
      content={`Agregar entrada a ${sectionTitle}`}
    >
      <Button
        onClick={() => pushToSection(sectionTitle)}
        size="sm"
        radius="sm"
        className="bg-slate-600 text-lg w-full"
        color="primary"
        isIconOnly
      >
        <RiAddFill />
      </Button>
    </Tooltip>
  );
}
export default AddButton;
