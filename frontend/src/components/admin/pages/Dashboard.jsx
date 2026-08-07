import { useEffect, useState } from "react";
import api from "../../../services/api";
import DashboardCard from "../components/DashboardCard.jsx"

// DASHBOARD
function Dashboard(){
    const [stats, setStats] = useState({
        totalProducts:0,
        totalUsers:0,
        totalStock:0
    });
    useEffect(()=>{
        getStats();
    }, []);

    // OBTENER ESTADÍSTICAS
    const getStats = async()=>{
        try {
            const { data } = await api.get(
                "/dashboard/stats"
            );
            setStats(data);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <section>
            <div className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
            "> 
                <DashboardCard
                    title="Productos"
                    value={stats.totalProducts}
                />
                <DashboardCard
                    title="Usuarios"
                    value={stats.totalUsers}
                />
                <DashboardCard
                    title="Stock total"
                    value={stats.totalStock}
                />
            </div>
        </section>
    )
}
export default Dashboard;