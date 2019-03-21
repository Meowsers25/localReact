import React from "react";

// function App() {
//   return (
//     <div>
//       <h3>Code goes here</h3>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    // any logic goes here after render
    const name = "Chris";
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
export default App;
