import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from 'components/Navbar';
import Pagination from "components/Pagination";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/Form">
          <Route path=":movieID" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
