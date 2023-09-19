import { RiLinkedinBoxFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import ContactLink from "./ContactLink";
import CvSection from "./CvSection";
import Title from "./Title";

function PreviewPage({ cvInfo }) {
  const sections = cvInfo.sections.map((section) => (
    <CvSection section={section} key={section.title}/>
  ));

  return (
    <main className="bg-white flex flex-col items-center h-[842px] w-[595px] m-auto drop-shadow-xl">
      <section className="bg-slate-100 flex flex-col justify-center items-center p-5 gap-2 w-full">
        <Title>{cvInfo.name}</Title>
        <div className="flex flex-wrap w-3/5 gap-2 justify-center">
          <ContactLink text={cvInfo.email} icon={<RiMailFill />} />
          <ContactLink text={cvInfo.phoneNumber} icon={<RiWhatsappFill />} />
          <ContactLink text={cvInfo.linkedIn} icon={<RiLinkedinBoxFill />} />
        </div>
      </section>
      {sections}
     
    </main>
  );
}

export default PreviewPage;
