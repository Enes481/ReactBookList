import React from'react';
import ReactDom from "react-dom/client";
import App from './components/App';



//ReactDom.render(<App/>,document.getElementById('root'));
//app uygulamasını render et 
//id'si root olan yerde göster

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);