import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userStore } from '../features/userData'

const UserDetails = () => {
    const {id} = useParams()
    const usersData = useSelector(userStore)
    const users = usersData.all

    const user = users?.find(user => user._id === id)

    return (
        <div className="mainContainer">{user.email}</div>
    );
}
 
export default UserDetails;