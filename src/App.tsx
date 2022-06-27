import { ConsultsProvider } from "./ConsultsContext";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <ConsultsProvider>
      <GlobalStyle />
      <Router />
    </ConsultsProvider>
  );
}

export default App;
