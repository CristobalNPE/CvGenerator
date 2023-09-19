function SideButton({ icon, text }) {
  return (
    <button className=" transition-colors hover:bg-slate-800 active:bg-slate-900 drop-shadow-4xl rounded-xl bg-slate-600 min-w-fit w-4/5 p-4 uppercase tracking-wide gap-2 text-white font-extralight flex flex-col justify-center items-center">
      <span className="text-3xl">{icon}</span>
      {` ${text}`}
    </button>
  );
}

export default SideButton;
