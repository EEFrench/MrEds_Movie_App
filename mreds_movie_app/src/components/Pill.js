import "../css/Pill.css";

const Pill = ({
  fontColor = "black",
  backgroundColor = "lightgrey",
  borderColor = "lightgrey",
  children,
}) => {
  const pillStyle = {
    color: fontColor,
    backgroundColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <span className="pill" style={pillStyle}>
      {children}
    </span>
  );
};

export default Pill;