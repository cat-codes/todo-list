import './App.css'
import Theme from './components/Theme';
import List from './components/list'

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