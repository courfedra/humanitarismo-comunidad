import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolderOpen,
    faCircleUser,
    faLightbulb,
    faCircleCheck
} from "@fortawesome/free-regular-svg-icons";

export default function StatsSection() {
    const stats = [
        {
            icon: faFolderOpen,
            number: "500+",
            description: "Proyectos completados"
        },
        {
            icon: faCircleUser,
            number: "359+",
            description: "Familias beneficiadas"
        },
        {
            icon: faLightbulb,
            number: "428+",
            description: "Voluntarios activos"
        },
        {
            icon: faCircleCheck,
            number: "67+",
            description: "Premios recibidos"
        }
    ];

    return (
        <section className="bg-[#5E17EB] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (                        <div key={index} className="flex flex-col items-center">
                            <div className="flex items-center justify-center mb-4">
                                <FontAwesomeIcon 
                                    icon={stat.icon} 
                                    className="w-10 h-10 text-white opacity-90"
                                />
                            </div>
                            <span className="text-2xl md:text-4xl font-bold text-white mb-1">
                                {stat.number}
                            </span>
                            <span className="text-sm md:text-base text-white opacity-90">
                                {stat.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
