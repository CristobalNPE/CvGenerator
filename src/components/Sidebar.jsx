function Sidebar({ cvInfo, onCvChange, createSection }) {
  return (
    <nav className="bg-slate-300 flex flex-col w-1/4 drop-shadow-xl gap-5 items-center">
      <h1>Sidebar</h1>
      {/* <SideButton icon={<RiUser3Fill />} text="información general" />
      <SideButton icon={<RiBook2Fill />} text="DATOS ACADéMICOS" />
      <SideButton icon={<RiBriefcase2Fill />} text="EXPERIENCIA LABORAL" />
      <SideButton icon={<RiHammerFill />} text="HABILIDADES TéCNICAS" /> */}

      <input
        name="name"
        type="text"
        placeholder="Nombre Completo"
        value={cvInfo.name}
        onChange={onCvChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Correo Electrónico"
        value={cvInfo.email}
        onChange={onCvChange}
      />
      <input
        name="phoneNumber"
        type="text"
        placeholder="Número Contacto"
        value={cvInfo.phoneNumber}
        onChange={onCvChange}
      />
      <input
        name="linkedIn"
        type="text"
        placeholder="LinkedIn"
        value={cvInfo.linkedIn}
        onChange={onCvChange}
      />

      <div>
        <h1 className="text-lg font-semibold">Secciones:</h1>
        {cvInfo.sections.map((section) => (
          <p key={section.title}>{section.title}</p>
          // Here it should also show the added details on each section with buttons to make it editable.
          // Maybe just make them input
        ))}
      </div>

      <button
        onClick={() => createSection("Cute Section")}
        className="p-3 bg-red-400"
      >
        TEST add new section
      </button>
    </nav>
  );
}

export default Sidebar;
