import { Outlet } from "react-router-dom"
export default function Dashboard(){
    return(
        <>
        <h1>Panel</h1>
        <Outlet />
        </>
    )
}