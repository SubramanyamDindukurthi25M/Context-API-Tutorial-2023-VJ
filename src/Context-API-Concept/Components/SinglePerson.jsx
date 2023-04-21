import { useShareContext } from "../context/AppContext"

export const SinglePerson = ({id,name}) => {
    // get callback function from context
    const{hanldeRemoveUser} = useShareContext()
    
    return (
        <li className="list-group-item">
            {name} - <button className="btn btn-primary" onClick={() => hanldeRemoveUser(id)}>remove</button>
        </li>
    )
}