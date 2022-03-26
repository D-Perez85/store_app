import Principal from "./pages/principal/Principal";
import { ProductContextProvider } from './context/productContext';


function App() {
  return (
    <div>
      <ProductContextProvider>
          <Principal/>
      </ProductContextProvider>
    </div>
  );
}

export default App;
