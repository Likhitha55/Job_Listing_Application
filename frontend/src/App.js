
// import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import SearchPage from './components/SearchPage';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import AllJobs from './components/AllJobs';
import PostJob from './components/PostJob';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/searchpage" element={<SearchPage/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/alljobs" element={<AllJobs/>}></Route>
        <Route path="/postjob" element={<PostJob/>}></Route>
        {/* <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route> */}
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;