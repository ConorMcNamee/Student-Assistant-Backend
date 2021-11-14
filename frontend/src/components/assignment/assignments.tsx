import { render } from '@testing-library/react';
import {useEffect, useState} from 'react';
import useFetch from "../hooks/hooks";
import AssignmentForm from "./assignmentForm";
import axios, {AxiosResponse} from 'axios';

import "./assignments.css";

const Assignments = () => {

  const [data, loading] = useFetch("http://127.0.0.1:8000/assignments/get-assignments/");
  const [assignmentName, setAssignmentName] = useState();
  
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

  console.log(data);
  return(
    <div className="assignment-container">
      <div className="assignment-list">
        <div className="assignment-list-item">
          {
            data.map((assignment) => <div key={assignment.assignment_id} draggable="true" className="assignment-list-item-container">
                <p contentEditable="true" className="assignment">{assignment.assignment_title}</p>
                <input type="checkbox"></input>
              </div>

            )
          }
        </div>
      </div>
      <AssignmentForm />
    </div>
  )

}



export default Assignments;