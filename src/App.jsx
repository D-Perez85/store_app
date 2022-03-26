import Principal from "./pages/principal/Principal";
import { ProductContextProvider } from './context/productContext';
import { UserContextProvider } from "./context/userContex";

function App() {
  return (
    <div>
      <UserContextProvider>
        <ProductContextProvider>
            <Principal/>
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}
export default App;
