import './App.css'
import Theme from './components/Theme.jsx';
import List from './components/List.jsx'
import { GetThemeValue } from './components/ContextTheme';

function App() {
  const {darkTheme} = GetThemeValue();
  return (
    <>
      <Theme/>
      <div className='content' id={darkTheme ? 'darkBody' : 'body'}>
        <List/>
      </div>
    </>
  )
}

export default App;