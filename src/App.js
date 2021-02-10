import Header from './components/Header'
import UserCard from './components/UserCard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const headerLinks = [
  {
    "id": 1,
    "title": "Ana Sayfa",
    "link": "/"
  },
  {
    "id": 2,
    "title": "Yazılar",
    "link": "/blog"
  },
  {
    "id": 3,
    "title": "Projeler",
    "link": "/projects"
  },
  {
    "id": 4,
    "title": "Hakkımda",
    "link": "/about"
  }
]

function App() {

  return (
    <>
      <Router>
        
        <Header links={headerLinks} />
        
        <main>
          <UserCard />
        </main>

      </Router>
    </>
  );

}

export default App;
