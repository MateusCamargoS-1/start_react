import './App.css';
import DefaultTheme from './config/theme/DefaulTheme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <DefaultTheme>
      <AppRoutes />
    </DefaultTheme>
  );
}

export default App;
