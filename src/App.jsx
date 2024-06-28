import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TheFooter from './components/TheFooter';
import MyNavbar from './components/MyNavbar';
import MyGallery from "./components/MyGallery";
//import MyGallery from "./components/MyGallery";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
      </header>
      <main>
        {<MyGallery />}

      </main>
        <TheFooter/>
    </div>
  );
}

export default App;
