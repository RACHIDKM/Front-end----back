import React, {useRef} from "react";

const NewUser = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    let name = nameRef.current.value;
    let age = ageRef.current.value;
    let email = emailRef.current.value;

    fetch("http://localhost:3002", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name, age: age, email: email})
    });

    nameRef.current.value = ''
    ageRef.current.value = ''
    emailRef.current.value = ''
  }

  return (
    <form className="bg-purple-300 p-6 w-[600px]" onSubmit={submitHandler}>
      <h1 className="mb-4 font-bold">Create New Student</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageRef}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef}/>
        </div>
        <button type="submit" className="bg-green-500 h-fit px-2 py-1 self-end">
          Create New Student
        </button>
      </div>
    </form>
  );
};

export default NewUser;
