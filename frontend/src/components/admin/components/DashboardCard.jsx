// DASHBOARD CARD COMPONENT
function DashboardCard({ title, value }){
    return (
        <article className="
            bg-white
            p-8
            rounded
            shadow-md
        ">
            <p className="
                text-gray-500
                mb-3
            ">
                {title}
            </p>
            <h3 className="
                text-4xl  
                font-bold
                text-[#8b5e3c]
            ">
                {value}
            </h3>

        </article>
    )
}

export default DashboardCard;