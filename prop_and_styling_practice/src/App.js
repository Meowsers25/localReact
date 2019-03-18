import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  // quick example of higher order method
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const doubled = nums.map(function(num) {
  //   return num * 2;
  // });
  // console.log(doubled);

  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  // console.log(jokeComponents);

  return <div>{jokeComponents}</div>;
}

export default App;
