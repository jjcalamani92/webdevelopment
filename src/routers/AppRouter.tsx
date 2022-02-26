import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AboutPages } from "../components/pages/about/AboutPages";
import { ContactPages } from "../components/pages/contact/ContactPages";
import { HomePages } from "../components/pages/home/HomePages";
import { PortfolioPages } from "../components/pages/portfolio/PortfolioPages";
import { ServicePages } from "../components/pages/service/ServicePages";
import { Layout } from "./Layout";
import { BlogsPages } from '../components/pages/blogs/BlogsPages';
import { BlogsView } from '../components/pages/blogs/BlogsView';
import ScrollToTop from "../helpers/ScrollToTop";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePages />} />
                    <Route path="sobre_mi" element={<AboutPages />} />
                    <Route path="portafolio" element={<PortfolioPages />} />
                    <Route path="servicios" element={<ServicePages />} />
                    <Route path="blogs" element={<BlogsPages />} />
                    <Route path="blogs/:titleURL" element={<BlogsView />} />
                    <Route path="contacto" element={<ContactPages />} />
                        {/* 
                        <Route path="sobre_mi" element={<AboutScreen/>} />
                        <Route path='portafolio' element={<PortfolioScreen/>} />
                        <Route path='servicios' element={<ServiceScreen/>} />
                        <Route path='contacto' element={<ContactScreen/>} />
                        <Route path='*' element={<Navigate replace to="/" />} /> */}
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}
