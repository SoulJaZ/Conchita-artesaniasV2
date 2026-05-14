import { useEffect } from "react";

import api from "../services/api";
import Hero from "../components/Hero/Hero";

// HOME PAGE

function Home() {

    // TEST API

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await api.get("/products");

                console.log(res.data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchProducts();

    }, []);


    return (
        <>
              <Hero />
        </>
    )
}

export default Home;