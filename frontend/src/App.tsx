import Assignments from './components/assignment/assignments';
import AssignmentForm from './components/assignment/assignmentForm';
import Sidebar from './components/navbar/Sidebar';

import { useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

import './styles/main.css';

const App = () => {

  return(
    <div className="App">
      <div className="content">
        <Sidebar />
        <Assignments />
        <AssignmentForm />
      </div>
    </div>
  );
}

export default App;