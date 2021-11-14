import react, { useState } from "react";
import "./assignment_form.css";
import axios from "axios";
import React from "react";


const AssignmentForm = () => {

    const [assignmentTitle, setAssignmentTitle] = useState('');
    const onSubmit = () => {
        axios({
          method: 'post',
          url: "http://127.0.0.1:8000/assignments/create-assignment/",
          data: {
            assignment_title: assignmentTitle,
          }
        })
        alert(assignmentTitle);
      }
    
      const handleChange = (e: React.FormEvent<HTMLInputElement>):void => {
        setAssignmentTitle(e.currentTarget.value);
      }

    return(
        <div className="assignment-form-container">
            <h1 className="assignment-header">Add Assignment</h1>
            <form className="assignment-form" onSubmit={onSubmit}>
                <input
                    className="assignment-form-input"
                    type="text" 
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default AssignmentForm;