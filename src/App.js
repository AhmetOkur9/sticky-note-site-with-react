import { useState } from "react";
import "./App.css"
// components
import Canvas from "./components/Canvas";



function App() {
  const [imgUrl,setImgUrl] = useState("")


  return (
    <div className="app-page">
      <h1>Üzerinde Not Almak İstediğiniz Resmi Yükleyin</h1>
      <p>Mesaj bırakma modunu açmak için tuvale tıklayıp c'ye basınız.</p>
      <input style={{marginBottom:"3rem"}} onChange={e=>setImgUrl(e.target.value)} type="text" placeholder="resmin url'si" />
      <Canvas imgUrl={imgUrl}/>
    </div>
  );
}

export default App;
