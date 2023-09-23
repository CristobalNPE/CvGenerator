import { Input } from "@nextui-org/react";
import DeleteButton from "./DeleteButton";

function DetailsCard({
  handleDelete,
  id,
  title,
  description,
  from,
  until,
  fromSection,
  handleChange,
}) {
  return (
    <div className="bg-slate-200 p-1 rounded-md mb-2">
      <div className="flex justify-end">
        <DeleteButton handleClick={() => handleDelete(id, fromSection)} />
      </div>
      <Input
        className="text-slate-700 mb-2"
        label="Título"
        radius="sm"
        name="title"
        value={title}
        onChange={(event) => handleChange(event, fromSection, id)}
      />
      <Input
        className="text-slate-700 mb-2"
        label="Descripción"
        radius="sm"
        name="description"
        value={description}
        onChange={(event) => handleChange(event, fromSection, id)}
      />
      {fromSection !== "Habilidades Técnicas" && (
        <div className="flex gap-2">
          <Input
            className="text-slate-700 mb-2"
            label="Desde"
            radius="sm"
            name="from"
            value={from}
            onChange={(event) => handleChange(event, fromSection, id)}
          />
          <Input
            className="text-slate-700 mb-2"
            label="Hasta"
            radius="sm"
            name="until"
            value={until}
            onChange={(event) => handleChange(event, fromSection, id)}
          />
        </div>
      )}
    </div>
  );
}

export default DetailsCard;
