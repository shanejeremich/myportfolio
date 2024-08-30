import "./Section.scss";

const Section = ({ className, title, children, backgroundColor, headerBG, border }) => {
  const sectionStyle = {
    backgroundColor: backgroundColor,
  };
  const headerStyle = {
    backgroundColor: headerBG,
    border: border,
  };

  return (
    <section className={`section ${className}`} id={className}>
      <div className={`section__card`}>
        <div className={`section__header text-bg`} style={headerStyle}>
          {title}
        </div>
        <div className={`section__card-content`} style={sectionStyle}>
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
