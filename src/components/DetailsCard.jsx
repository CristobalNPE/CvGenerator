import { Input } from "@nextui-org/react";
import DeleteButton from "./DeleteButton";

function DetailsCard({
  deleteHandleClick,
  id,
  title,
  description,
  from,
  until,
  fromSection,
}) {
  return (
    <div className="bg-slate-200 p-1 rounded-md mb-2">
      <div className="flex justify-end">
        <DeleteButton handleClick={() => deleteHandleClick(id,fromSection)} />
      </div>
      {/* //Here
    come the changes now */}
      <Input className="text-slate-700 mb-2" label="Título" />
      <Input className="text-slate-700 mb-2" label="Descripción" />
      <div className="flex gap-2">
        <Input className="text-slate-700 mb-2" label="Desde" />
        <Input className="text-slate-700 mb-2" label="Hasta" />
      </div>
    </div>
  );
}

export default DetailsCard;
