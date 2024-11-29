import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Result from './Result';

function App() {
  const [renderResult, setRenderResult] = React.useState(false); // State to toggle between Calculator and Result

  const handleSubmit = () => {
    document.body.style.backgroundColor = "#303030";
    setRenderResult(true);
  };
  
  return (
    <div>
      <Navbar />
      {!renderResult ? (
        <Calculator onSubmit={handleSubmit} />
      ) : (
        <Result />
      )}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

