
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CounterClass from './ClassComponents';
import CounterFunction from './FunctionComponents';
import UseState from './UseState';
import FetchUserDetails from './FetchUserDetails';
import { ParentComponent } from './ParentComponent';
import Component1 from './UseContext';
import Component1PropDrilling from './PropDrilling';
import Header from './Header';
import HigherOrder from './HigherOrderComponent';
import FetchData from './fetchData';
import AxiosFetch from './AxiosFetch';
import ChildComponent from './ChildComponent';
import { EventHandlers } from './EventHandlers';

function App() {
  
  return (

      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">CounterClass</Link></li>
          <li><Link to="/counter">CounterFunction</Link></li>
          <li><Link to="/usestate">UseState</Link></li>
          <li><Link to="/fetch">FetchUserDetails</Link></li>
          <li><Link to="/parent">ParentComponent</Link></li>
          <li><Link to="/component">Component1</Link></li>
          <li><Link to="/prop-drilling">Component1PropDrilling</Link></li>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/higher">HigherOrder</Link></li>
          <li><Link to="/fetch-data">FetchData</Link></li>
          <li><Link to="/axios">AxiosFetch</Link></li>
          <li><Link to="/child">Child Component</Link></li>
          <li><Link to="/event">Event Handlers</Link></li>
        </ul>
      </nav>
      <Routes>      
          <Route path="/" element={<CounterClass />} />
          <Route path="counter" element={<CounterFunction />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="fetch" element={<FetchUserDetails /> } />
          <Route path="parent" element={<ParentComponent />} />
          <Route path="component" element={<Component1 />} />
          <Route path="prop-drilling" element={<Component1PropDrilling />} />
          <Route path="header" element={<Header />} />
          <Route path="higher" element={<HigherOrder />} />
          <Route path="fetch-data" element={<FetchData />} />
          <Route path="axios" element={<AxiosFetch />} />     
          <Route path='child'element={<ChildComponent />} />
          <Route path='event' element={<EventHandlers />} />

      </Routes>            
      </BrowserRouter>
      

    
  );
}

export default App;
