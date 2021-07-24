import Card from '../UI/Card'
import DisplaySingleUser from './DisplaySingleUser'
import styleClasses from './DisplayUser.module.css'

const DisplayUser = (props) => {

    const renderUserArray = props.usersArray.map(x=>{
        return <DisplaySingleUser 
            name = {x.username} 
            age={x.age}
            key = {x.id}> 
            </DisplaySingleUser>
    })

    return(
        <Card className= {styleClasses.DisplayUser}>
            {renderUserArray}
        </Card>
    )
} 

export default DisplayUser;