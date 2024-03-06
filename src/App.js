import { useEffect, useState } from "react";
import Card from "./components/Card";
import NewUser from "./components/NewUser";

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3002").then(res => res.json())
      setStudents(data.reverse())
    };

    fetchData()
  }, [students]);

  return (
    <div className="flex flex-col gap-2">
      <NewUser />
      {students.map((student) => (
        <Card
          key={student._id}
          name={student.name}
          age={student.age}
          email={student.email}
          id={student._id}
        />
      ))}
    </div>
  );
}

export default App;
