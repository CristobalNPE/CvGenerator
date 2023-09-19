function ContactLink({ text, link, icon }) {
  return (
    <a href={link} className="text-xs font-light flex items-center gap-1">
      <span className="opacity-70">{icon}</span> {text}
    </a>
  );
}
export default ContactLink;
