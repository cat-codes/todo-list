import './App.css'
import Theme from './components/Theme.jsx';
import List from './components/List.jsx'

function App() {
  return (
    <>
      <div className='background'/>
      <div className='content'>
        <List/>
        <Theme/>
      </div>
    </>
  )
}

export default App;