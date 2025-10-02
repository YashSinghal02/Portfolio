import React from "react";
import { ReactTyped } from "react-typed";

function AutoText() {
  return (
    <h2 style={{ 
      display: "flex", 
      alignItems: "center", 
      flexWrap: "wrap", 
      gap: "8px",
      // justifyContent: "center"
    }}>
      <span>And I'm a</span>
      <span className="auto-devloper-text" style={{ 
        color: "#c084fc",
        display: "inline-block"
      }}>
        <ReactTyped
          strings={["Developer", "Student", "Designer"]}
          typeSpeed={150}
          backSpeed={40}
          loop
          cursorChar="|"
          showCursor={true}
        />
      </span>
    </h2>
  );
}

export default AutoText;