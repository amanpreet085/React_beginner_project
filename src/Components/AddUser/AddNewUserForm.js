import { useState } from "react";
import styles from './AddNewUserForm.module.css'
import swal from 'sweetalert';

const AddNewUserForm = (props) => {

    const [formUsername, setFormUsername] = useState('');
    const [formAge, setFormAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (formUsername.trim() === '' || formAge.trim() === '') {
            swal("EMPTY VALUES!","1 OR BOTH VALUES YOU SUPPLIED WERE NULL OR WHITESPACES, PLEASE ENTER VALID VALUES", "error");
        }
        else {
            let randomNo = Math.random().toString();
            let formUserObj = {
                username: formUsername.toUpperCase(),
                age: formAge,
                id: randomNo
            }
            props.onUserAdd(formUserObj);
        }
        //console.log(formUserObj);

        setFormUsername('');
        setFormAge('');
    }

    const usernameChangeHandler = (event) => {
        setFormUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setFormAge(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.newUser}>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={usernameChangeHandler} value={formUsername}></input>
                </div>
                <div>
                    <label>Age (Years)</label>
                    <input type="number" min="0" step="1" onChange={ageChangeHandler} value={formAge}></input>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>
    )
}

export default AddNewUserForm;