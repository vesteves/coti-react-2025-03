import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";

export const HomePage = () => {
  return <div style={{ padding: '20px' }}>
    <h1>Olá mundo! Eu sou a rota raiz</h1>
    <NavLink to="/todo-list">Minha To-do List</NavLink>
    <Footer />
  </div>
}

export default HomePage