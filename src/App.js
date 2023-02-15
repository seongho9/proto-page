import './App.css';
import Contents from './components/Contents';
import Cover from './components/Cover';
import Input from './components/Input';
import Template from './pages/Template';
function App() {

  

  
  return (
    <div className='App'>
      <Template>
        <Cover />
        <Contents />
        <Input />
      </Template>
    </div>
  );
}

export default App;
