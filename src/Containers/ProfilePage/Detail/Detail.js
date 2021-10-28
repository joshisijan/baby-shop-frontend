import { useSelector } from "react-redux"
import { LockClosedIcon } from '@heroicons/react/solid'

const Detail = () => {
    const userDetailState = useSelector(state => state.userDetail)
    return (
        <div className="md:px-4">            
            <ul className="space-y-4">
                <li>
                    <label className="text-sm font-medium inline-flex items-center"><LockClosedIcon className="w-3.5 h-3.5" /> Username:</label><br />
                    <input disabled className="w-full md:w-96" type="text" value={userDetailState.user.username} />
                </li>
                <li>
                    <label className="text-sm font-medium inline-flex items-center"><LockClosedIcon className="w-3.5 h-3.5" /> Email:</label><br />
                    <input disabled className="w-full md:w-96" type="text" value={userDetailState.user.email} />
                </li>
                <li>
                    <label className="text-sm font-medium">First name:</label><br />
                    <input disabled className="w-full md:w-96" type="text" value={userDetailState.user.firstName} />
                </li>
                <li>
                    <label className="text-sm font-medium">Last name:</label><br />
                    <input disabled className="w-full md:w-96" type="text" value={userDetailState.user.lastName} />
                </li>
            </ul>
        </div>
    )
}

export default Detail
