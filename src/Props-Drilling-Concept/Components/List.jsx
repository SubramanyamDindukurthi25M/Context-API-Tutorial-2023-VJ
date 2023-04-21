import { SinglePerson } from "./SinglePerson"

export const List = ({shareData,removeUser}) => {
    return (
        <ul className="list-group">
            {
                shareData.map((user) => {
                    const{id} = user
                    return (
                        <SinglePerson
                            key={id}
                            {...user}
                            removeUser={removeUser}
                        />
                    )
                })
            }
        </ul>
    )
}