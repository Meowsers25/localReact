import React from "react";

const root = document.getElementById("root");

function MyInfo() {
  return (
    <div>
      <h1 className="name">Christian Lamothe</h1>
      <p>
        I am a firefighter with a passion for <span>coding</span>.
      </p>
      <ul>
        <li>Paris</li>
        <li>Tuscany</li>
        <li>Somewhere Warm</li>
      </ul>
    </div>
  );
}

// need to export file
export default MyInfo;
