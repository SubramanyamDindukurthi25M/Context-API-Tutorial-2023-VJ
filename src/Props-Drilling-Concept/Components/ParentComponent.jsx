import { useState } from "react";
import { usersData } from "../../data";
import { List } from "./List";

export const ParentComponent = () => {
    const [data, setData] = useState(usersData)

    // Logic to remove each user
    const hanldeRemoveUser = (id) => {
        const result = data.filter((person) => {
            if (person.id !== id) {
                return true
            }
        })
        setData(result)
    }
    return (
        <>
            <List
                shareData = {data}
                removeUser = {hanldeRemoveUser}
            />
        </>
    )
}