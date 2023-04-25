import ListControl from '../components/ListControl';
import Pagination from '../components/Pagination';
import UserDetailsModal from '../components/UserDetailsModal';
import UserList from '../components/UserList';
import UserPanel from '../components/UserPanel';

const UserListing = () => {
    return (
        <div className="flex flex-col items-center">
            <UserDetailsModal />
            <UserPanel />
            <ListControl />
            <UserList />
            <Pagination />
        </div>
    );
};

export default UserListing;
