import react from "react";
import "./assignment_form.css";

const assignmentForm = () => {

    return(
        <div className="assignment-form-container">
            <h1 className="assignment-header">Add Assignment</h1>
            <form className="assignment-form">
                <input
                    className="assignment-form-input"
                    type="text" 
                />
            </form>
        </div>
    )
}

export default assignmentForm;