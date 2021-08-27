import { render } from '@testing-library/react';
import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import useFetch from "./hooks/hooks";

import './styles/assignments.css';

const Assignments = () => {

  const [data, loading] = useFetch("http://127.0.0.1:8000/assignments/get-assignments/");
  const [assignmentName, setAssignmentName] = useState();

  const onSubmit = () => {
    axios({
      method: 'post',
      url: "http://127.0.0.1:8000/assignments/get-assignments/",
      data: {
        
      }
    })
  }

  const onChange = () => {
    console.log("E")
  }

  return(
    <div>
      {
        data.map((assignment) => <p key={assignment.assignment_id}>{assignment.assignment_title}</p>)
      }

      <div className="create-assignment">
        <form onSubmit={onSubmit}>
          <input 
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  )

}



export default Assignments;