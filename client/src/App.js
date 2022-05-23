import { Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
