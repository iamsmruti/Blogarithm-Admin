import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import { userState } from '../features/userAuth';

const Layout = ({children}) => {
    const loggedUser = useSelector(userState)
    const authState = loggedUser.isAuthor 

    return (
        <div>
            <div>
                {authState && <Navbar />}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default Layout;