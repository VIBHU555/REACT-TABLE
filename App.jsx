
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [course, setCourse] = React.useState("");

  async function handlesubmit(e) {
    e.preventDefault();

     const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    })

      const data = await response.json();
      console.log(data);
    }
  return (
    <div className="container">
      <h2>Student Registration</h2>
      <br></br>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
<br></br>
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
<br></br>
<br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

