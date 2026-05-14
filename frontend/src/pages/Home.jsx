import { useEffect } from "react";

import api from "../services/api";

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

        <section className="max-w-7xl mx-auto p-5">

            <h1 className="text-5xl font-bold mb-5">

                Bienvenidos

            </h1>


            <p className="text-gray-600 text-lg">

                Descubre nuestras artesanías únicas.

            </p>

        </section>
    )
}

export default Home;