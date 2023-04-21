import { ParentComponent } from "./Components/ParentComponent"

export const App = () => {
    return (
        <>
            <h1
                className="text-center my-2 text-info"
            >
                About Props Drilling 
            </h1>
            <ParentComponent/>
        </>
    )
}