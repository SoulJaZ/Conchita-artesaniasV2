import DashboardCard from "../components/DashboardCard";

// DASHBOARD PAGE
function Dashboard() {
    return (
        <section>
            {/* GRID */}
            <div className="
                grid
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            ">
                <DashboardCard
                    title="Ventas"
                    value="$12,450"
                />

                <DashboardCard
                    title="Órdenes"
                    value="152"
                />

                <DashboardCard
                    title="Usuarios"
                    value="89"
                />

                <DashboardCard
                    title="Productos"
                    value="46"
                />
            </div>
        </section>
    )
}
export default Dashboard;
