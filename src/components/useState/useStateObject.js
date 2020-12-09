import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
	});
	
	const messageButton = () => {
		setPerson({...person, message: "new message"});
	}

  return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className="btn" onClick={messageButton}>change message</button>
		</>
	);
};

export default UseStateObject;
