import React from "react";
import "./App.css";

// Header component
function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        textAlign: "center",
        padding: "30px 20px",
        marginBottom: "30px"
      }}
    >
      <h1 style={{ margin: 0 }}>
        Student Management System
      </h1>
    </header>
  );
}

// Reusable StudentProfile component
function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      © 2026 Student Management System
    </footer>
  );
}

function App() {

  // Student details
  const student1 = {
  name: "Anu",
  department: "CSE",
  year: "3rd Year"
};

const student2 = {
  name: "Bala",
  department: "Computer Science",
  year: "3rd Year"
};

  return (
    <div>
      <Header />

      <h2>Student 1</h2>
      <StudentProfile
        name={student1.name}
        department={student1.department}
        year={student1.year}
      />

      <h2>Student 2</h2>
      <StudentProfile
        name={student2.name}
        department={student2.department}
        year={student2.year}
      />

      <Footer />
    </div>
  );
}

export default App;