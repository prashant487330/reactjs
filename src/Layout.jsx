import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="Home">Home</Link> |
        <Link to="Contact">Contact</Link> |
        <Link to="Insert">Insert</Link> |
        <Link to="Display">Display</Link> |
        <Link to="Search">Search</Link> |
        <Link to="update">Update</Link>
        <hr size="3" color="red" />
        <Outlet/>
        <hr size="3" color="red" />
        www.mycompany.com all right is reserved.

        </>
    )
}
export default Layout;