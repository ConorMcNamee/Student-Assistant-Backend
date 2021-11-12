import react from "react";
import "./assignment_form.css";
import axios, {AxiosResponse} from 'axios';

const assignmentForm = () => {

    const onSubmit = () => {
        axios({
          method: 'post',
          url: "http://127.0.0.1:8000/assignments/set-assignments/",
          data: {
            
          }
        })
      }
    
      const onChange = () => {
        console.log("E")
      }

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