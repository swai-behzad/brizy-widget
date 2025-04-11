import { ReactElement, useState } from "react";
import { Props } from "../types";
// import "./View.css"; // Import a CSS file for styling (optional)


export const View = (props: Props): ReactElement => {
  const { source } = props;
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="swai-image" >
      <img src={source} alt="Image" onClick={handleImageClick} style={{cursor: "pointer"}}/>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>
              ×
            </span>
            <img src={source} alt="Popup Image" style={{maxWidth: "90%", maxHeight: "90%"}}/>
            {/* You can add more content here, like a description */}
          </div>
        </div>
      )}
    </div>
  );
};