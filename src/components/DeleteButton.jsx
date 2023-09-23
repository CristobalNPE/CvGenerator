import { Button, Tooltip } from "@nextui-org/react";
import { RiDeleteBin2Line } from "react-icons/ri";

function DeleteButton({ handleClick }) {
  return (
    <Tooltip closeDelay={100} color="danger" content={`Eliminar`}>
      <Button
        onClick={handleClick}
        size="sm"
        radius="lg"
        className="text-lg m-1"
        color="danger"
        variant="light"
        isIconOnly
      >
        <RiDeleteBin2Line />
      </Button>
    </Tooltip>
  );
}

export default DeleteButton;
