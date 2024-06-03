import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Jan 2024 - May 2024</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">VemSerDev course</h2>
        <p className=" mt-2">
        It's a course where we learn about Frontend (JavaScript, CSS, HTML, React, and Node.js), Backend (C#, Dotnet), Cloud & DevOps (Microsoft Azure), Career Development (LinkedIn and SWOT analysis), Financial Education, and Rapid Methods (Scrum and Kanban).
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
