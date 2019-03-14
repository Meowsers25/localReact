import React from "react";

const App = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  // styles object
  const styles = {
    fontSize: 50
  };

  // adds styles.color depending on time
  // Dynamic data
  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "#04756f";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#2e0927";
  } else {
    timeOfDay = "Night";
    styles.color = "#d90000";
  }

  // practice code for lesson
  // const styles = {
  //   color: "#ff8c00",
  //   backgroundColor: "#ff2d00",
  //   fontSize: 55
  // };

  // Cleaner to make styles object
  // If style is inline need to use {{}}
  // Any CSS that uses a dash - , need to use camelCase
  return <h1 style={styles}>Good {timeOfDay}!</h1>;
};

export default App;
