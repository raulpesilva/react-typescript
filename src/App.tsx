import { Home } from 'pages';
import { GlobalProvider } from 'providers';

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
