import { useState, useEffect } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => setJoke(`${data.setup} - ${data.punchline}`))
      .catch(error => console.error("Error fetching joke:", error));
  };

  return <div><p>{joke}</p>
  <br />
  <button onClick={fetchJoke}>Generate a new joke!</button>
  </div>;
}

export default JokeGenerator
