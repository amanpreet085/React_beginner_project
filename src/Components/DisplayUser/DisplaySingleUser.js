
import styleClasses from './DisplaySingleUser.module.css'

const DisplaySingleUser = (props) => {

    return(
        <div className={styleClasses.singleUser}>
            <p>{props.name} ({props.age} years old)</p>
        </div>
    )
    
}

export default DisplaySingleUser;