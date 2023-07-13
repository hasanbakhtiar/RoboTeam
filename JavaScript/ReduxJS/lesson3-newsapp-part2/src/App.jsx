import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/client/Home"
import Header from "./components/Header"
import NotFoundPage from "./pages/NotFoundPage"
import './assets/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NewsDetails from "./pages/client/NewsDetails";
import Dashbaord from "./pages/admin/Dashbaord";
import AddNews from "./pages/admin/update/AddNews";
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/:url" element={<NewsDetails />}></Route>
                    <Route path="/admin" element={<Dashbaord />}></Route>
                    <Route path="/admin/add" element={<AddNews />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App