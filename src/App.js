import { useState } from "react";
import DisplayUser from './Components/DisplayUser/DisplayUser' 
import AddNewUsers from './Components/AddUser/AddNewUsers'


function App() {
  const initialUserState = [
  ];

  const [users, setUsers] = useState(initialUserState) ;

  const changeUserState = (newUser) =>{ 
    let newObjArr = [...users]
    newObjArr.push(newUser);
    setUsers(newObjArr) ;
  } 

  return (
    <div className="App">
      <AddNewUsers onAddNewUser = {changeUserState}></AddNewUsers>
      <DisplayUser usersArray = {users}></DisplayUser>
    </div>
  );
}

export default App;
