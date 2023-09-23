import Subtitle from "./Subtitle";
import CvInfo from "./CvInfo";

function CvSection({ section }) {
  const sectionDetails = section.details.map((detail) => (
    <CvInfo {...detail} key={detail.id} />
  ));

  return (
    <section className="mt-5 flex flex-col  w-4/5">
      <Subtitle>{section.title}</Subtitle>
      {sectionDetails}
      <hr />
    </section>
  );
}
export default CvSection;
