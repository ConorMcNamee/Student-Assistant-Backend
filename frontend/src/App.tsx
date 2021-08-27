import Assignments from './components/assignments';
import { useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

import './styles/main.css';



const App = () => {

  return(
    <div className="App">
      <div className="content">
        <Assignments />
      </div>
    </div>
  );
}

export default App;