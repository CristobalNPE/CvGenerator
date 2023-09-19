function CvInfo({ details }) {
  return (
    <article className="flex justify-between text-xs mb-3 items-center">
      <div className="w-1/2">
        <h4 className="font-semibold">{details.title}</h4>
        <p className="font-light">{details.info}</p>
      </div>
      <div className="text-[0.58rem] text-gray-400">
        {details.from}
        {` - `}
        {details.until}
      </div>
    </article>
  );
}

export default CvInfo;
