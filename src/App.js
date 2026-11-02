// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import CostEstimator from "./components/CostEstimator";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Services/>
        <Doctors/>
        <CostEstimator/>
        <Testimonials/>
        <FAQ/>
        <Booking/>
      </main>

      <Footer/>
    </>
  );
}