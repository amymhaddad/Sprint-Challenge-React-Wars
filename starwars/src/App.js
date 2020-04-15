import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GetRepoData from './components/GetRepoData'

const App = () => {

  const githubUrl = 'https://api.github.com/orgs/github/repos?type=public'
  let [allData, setData] = useState([])

  useEffect(() => {
    axios.get(githubUrl)
    .then(function(response) {
      let githubData = response.data
      setData(githubData) 
    })
    .catch(function (error) {
      console.log(error.response.status);
    })
},[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>{allData.map((data) => (
        <GetRepoData
          key={data.id}
          name={data.name}
          fullname={data.full_name}
          url={data.owner.repos_url}
          />
      ))}
    </div>
      
    </div>
  );
}

export default App;