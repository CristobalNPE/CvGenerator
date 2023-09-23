function CvInfo({ id, title, description, from, until }) {
  return (
    <article className="flex justify-between text-xs mb-3 items-center">
      <div className="w-1/2">
        <h4 className="font-semibold">{title}</h4>
        <p className="font-light">{description}</p>
      </div>
      <div className="text-[0.58rem] text-gray-400">
        {from}
        {` - `}
        {until}
      </div>
    </article>
  );
}

export default CvInfo;
