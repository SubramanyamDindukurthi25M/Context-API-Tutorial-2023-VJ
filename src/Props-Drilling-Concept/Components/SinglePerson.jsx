export const SinglePerson = ({id,name,removeUser}) => {
    return (
        <li className="list-group-item">
            {name} - <span> <button className="btn btn-primary my-2" onClick={() => removeUser(id)}>remove</button> </span>
        </li>
    )
}