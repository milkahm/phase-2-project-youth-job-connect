import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddJob = ({ addJob }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const history = useHistory();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      description,
      location,
      salary,
      id: Date.now(), // Generate a unique ID for the job
    };

    // Add the new job to the list (in parent component or state management)
    addJob(newJob);

    // Redirect to the jobs list after adding the job
    history.push("/jobs");
  };

  return (
    <div className="add-job-form">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Job Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
