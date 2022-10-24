import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Layout from "./components/Layout";
// import ScoreContextProvider from "./Contexts/ScoreContext";
function App() {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
}

export default App;

// <Routes>
{
  /* <Route element={<Layout />}> */
}
// <Route path="/" element={<Header />} />
// <Route path="/content/:language" element={<Content />} />
{
  /* </Route> */
}
// </Routes>
