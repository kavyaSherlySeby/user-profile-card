import './App.css';
import UserCard from './components/UserCard'
import UserProfile from './components/UserProfile'
import userDetails from './constants/userDataFile'

const App = () => {
    return (
        <UserProfile  userData={userDetails} render={UserCard} />
    );
}

export default App
