import React from "react";
import photo from "../../img/spinner.gif";
const Spinner = () => {
  return (
    <div>
      <img
        src={photo}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Spinner;
