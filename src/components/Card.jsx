import React, { useState, useRef } from "react";

const Card = ({ name, age, email, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const updateHandeler = (e) => {
    console.log("the updater");
    e.preventDefault();
    let newName = nameRef.current.value;
    let newAge = ageRef.current.value;
    let newEmail = emailRef.current.value;

    fetch(`http://localhost:3002/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName, age: newAge, email: newEmail }),
    });

    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";

    setIsOpen(false);
  };

  const deleteHandler = () => {
    let confirm = window.confirm("Are you sure?");

    if(confirm){
      fetch(`http://localhost:3002/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  return (
    <div className="bg-purple-300 w-[600px] p-6">
      <div className="flex justify-between items-center gap-4 bg-purple-300">
        <div className="flex gap-2">
          <div className="h-[80px] w-[80px] bg-black rounded-full"></div>
          <div>
            <h1>
              <span className="font-bold">Name:</span> {name}
            </h1>
            <h1>
              <span className="font-bold">Age:</span> {age}
            </h1>
            <h1>
              <span className="font-bold">E-Mail:</span> {email}
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className=" bg-blue-500 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            UPDATE
          </button>
          <button className=" bg-red-500 p-2" onClick={deleteHandler}>
            DELETE
          </button>
        </div>
      </div>
      {isOpen && (
        <form className="mt-6" onSubmit={updateHandeler}>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameRef} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" ref={ageRef} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" ref={emailRef} />
            </div>
            <button
              type="submit"
              className="bg-blue-500 h-fit px-2 py-1 self-end"
            >
              Update Student
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Card;
