import { useEffect, useState } from 'react';
import './App.css';
import moment from "moment";
function App() {

  const [name, setName]=useState("");
  const [userName, setuserName]=useState("");
  const [repos, setRepos]=useState("");
  const [avatar, setAvatar]=useState("");
  const [gists, setgists]=useState("");
  const [date, setDate]=useState("");
  const[userInput,setUserInput]=useState("");

  useEffect(() =>{
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  },[]);
  const setData = ({name, login,avatar_url,public_repos,public_gists,created_at})=>{
    setName(name);
    setuserName(login);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setgists(public_gists);
    setDate(created_at);
  };
  
  const handleSearch = (input) => {
    setUserInput(input.target.value)
  };
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data=> {
      setData(data);
    });
  }
  return (
    

       
  
    <div className="App">
    

 <div className="navbar">Github Search</div>
  <div className="ui focus input userSearch">
  <input onChange={handleSearch}type="text" placeholder=" Enter Github Username"/>
  <button onClick={handleSubmit}className="ui primary button">Search</button></div>
 <div class="content"> <div className="ui card ">
  <div className="image">
  <img src={avatar}/></div>
  <div className="content">
  <div className="header "><i aria-hidden="true" className="address card icon"></i>Name :{name}</div>
  
 
  </div>
  <div className="extra content">
  <div className="header username" ><i aria-hidden="true" className="user icon"></i>username:  {userName}</div>
  </div>
  <div className="extra content">
  <div className="header"><i aria-hidden="true" className="code branch icon"></i>Public-Repos: {repos}</div>
  </div>
  <div className="extra content">
  <div className="header"><i aria-hidden="true" className="code icon"></i>Public-Gists: {gists}</div>
  </div>
  <div className="extra content">
  <div className="header"><i aria-hidden="true" className="
calendar alternate icon"></i>Created at : {moment(date).format("YYYY-MM-DD")}</div>
  </div>
  </div>
  </div> 

    </div>
  );
}

export default App;
