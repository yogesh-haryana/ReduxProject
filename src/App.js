import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormUserData from './components/Form';
import UserData from './components/UserData';
// import UserInfoModal from './components/UserInfoModal';
// import './Styles/StyleUserData.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/form" element={<FormUserData />} />
        {/* <Route path="/userInfo" element={<UserInfoModal />} /> */}
      </Routes>

    </div>
  );
}

export default App;
