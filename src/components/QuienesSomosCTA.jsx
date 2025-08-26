import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHandshake, faLightbulb } from "@fortawesome/free-regular-svg-icons";

export default function QuienesSomosCTA() {
    return (
        <section className="pt-16 pb-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="relative">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="/monte-quemado.jpeg"
                                alt="Monte Quemado"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5E17EB] mb-4">
                                Nuestra historia
                            </h2>
                            <div className="h-1 bg-[#F6A717] w-24 mb-6"></div>
                            <p className="text-gray-600">
                                Lo que empezó como una idea compartida en 2019, pronto se convirtió en una misión que transforma comunidades, personas y realidades. Martín y Nadia unieron fuerzas para brindar esperanza y oportunidades a comunidades como Monte Quemado, Santiago del Estero.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: faHeart,
                                    text: "Educación emocional y social"
                                },
                                {
                                    icon: faHandshake,
                                    text: "Trabajo comunitario"
                                },
                                {
                                    icon: faLightbulb,
                                    text: "Formación en valores"
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-left bg-[#F6A717] p-4 rounded-lg">
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="w-8 h-8 text-[#5E17EB] mb-3"
                                    />
                                    <p className="text-sm text-black">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/quienes-somos/"
                            className="inline-flex items-center bg-[#5E17EB] text-white px-8 py-3 rounded-full hover:bg-[#4c12c4] transition-colors text-base font-semibold"
                        >
                            Conocer más
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
