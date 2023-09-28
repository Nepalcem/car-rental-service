import ReactDOM from "react-dom";

const HeroPortal = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");

  return ReactDOM.createPortal(children, portalRoot);
};

export default HeroPortal;
