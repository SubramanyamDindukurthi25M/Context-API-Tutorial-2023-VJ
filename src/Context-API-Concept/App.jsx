import { ParentComponent } from "./Components/ParentComponent"

export const App = () => {
    return (
        <>
            <h1 className="my-2 text-capitalize text-info text-center">
                context api tutorial 
            </h1>
            <ParentComponent/>
        </>
    )
}