import AddNewUserForm from './AddNewUserForm'
import Card from '../UI/Card'
import styleClasses from './AddNewUser.module.css'

const AddNewUsers = (props) => {

    const addUserHandler = (userObj) => {
        props.onAddNewUser(userObj);
    }

    return(
        <Card className={styleClasses.newUser}>
            <AddNewUserForm onUserAdd= {addUserHandler}></AddNewUserForm>
        </Card>
    )
}

export default AddNewUsers ; 