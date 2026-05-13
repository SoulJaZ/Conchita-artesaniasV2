import { useEffect } from "react";
import api from '../services/api'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
    useEffect(() => {
        api.get("/products")
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }, []);

    return <>
        <Navbar />

        <main>
            <h1>Bienvenidos!</h1>
        </main>

        <Footer />
    </>


}

export default Home;