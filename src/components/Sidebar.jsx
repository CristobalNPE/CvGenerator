function Sidebar({ cvInfo, onCvChange }) {
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
    </nav>
  );
}

export default Sidebar;
