import { SinglePerson } from "./SinglePerson"
import { useShareContext } from "../context/AppContext"

export const List = () => {
    // read data from context
    const{data} = useShareContext()

    return (
        <ul className="list-group">
            {
                data.map((person) => {
                    const{id} = person
                    return (
                        <SinglePerson
                            key={id}
                            {...person}
                        />
                    )
                })
            }
        </ul>
    )
}