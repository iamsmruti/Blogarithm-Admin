import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState } from '../features/userAuth'

const Authors = () => {
    const auth = useSelector(userState)
    const location = useLocation()
    return (
        auth.isAuthor
            ? <Outlet />
            : <Navigate to='/login' state={{ from : location }} replace />
    );
}
 
export default Authors; 