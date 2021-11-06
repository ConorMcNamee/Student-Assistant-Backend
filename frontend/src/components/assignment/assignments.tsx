import { render } from '@testing-library/react';
import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import useFetch from "../hooks/hooks";
import AssignmentForm from "./assignmentForm";

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
        <div className="assignment-list-item" draggable="true">
          {
            data.map((assignment) => <p className="assignment" key={assignment.assignment_id}>{assignment.assignment_title}</p>)
          }
        </div>
      </div>
      <AssignmentForm />
    </div>
  )

}



export default Assignments;