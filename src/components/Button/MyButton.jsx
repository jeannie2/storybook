import PropTypes from "prop-types"

function MyButton({ label, background, boxShadow}) {
  const style = {
    background,
    boxShadow,
    color: "black",
    border: "1px solid black",
    fontSize: "1rem",
    padding: "0.9rem 0.8rem",
    borderRadius: "10px",
    textAlign: "center"
  }
  return (
    <button style={style}>
      {label}
    </button>
  )
}
MyButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
}
export default MyButton;
