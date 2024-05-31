
const UserProfile = ({ render, userData }) => {
    const Render = render;
    return <Render userData={userData} /> // here render is the component passed and userData is the data passed
};

export default UserProfile