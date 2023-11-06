import Info from './components/Info';
import SubscribtionButton from './components/atoms/SubscribtionButton'
import Form from './components/Form';

function App() {
  const wrapper = {
    margin: "0",
    height: "100vh",
    width: "100%",
    boxSizing: 'border-box',
    padding: "100px",
    backgroundColor: '#FF7979',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  return (
    <div style={wrapper}>
      <Info/>
      <div>
        <SubscribtionButton/>
        <Form/>
      </div>
    </div>
  );
}

export default App;


