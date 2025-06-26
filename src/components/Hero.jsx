import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
    faWhatsapp,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <div className="pt-30 md:pt-40 pb-8 md:pb-30">
            <section className="flex items-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-4 lg:gap-8">
                        {/* Left Content */}
                        <div className="space-y-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5E17EB] leading-tight mb-8">
                                    Humanitarismo Comunidad
                                </h1>

                                <div className="flex gap-6 items-stretch">
                                    <div className="border-l-2 border-[#5E17EB] pl-4 md:pl-6 flex-1">
                                        <p className="text-gray-600 text-base mb-4">
                                            Nuestra misión es sentar las bases para la formación de personas libres y fuertes, y mejorar la vida en comunidad.</p>
                                        <Link
                                            href="/donar"
                                            className="inline-flex items-center bg-[#5E17EB] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#4c12c4] transition-colors"
                                        >
                                            Quiero donar
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 mb-10 md:mb-0">
                                <a href="mailto:contacto@humanitarismo.com"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/humanitarismocomunidad/?hl=es"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                </a>
                                <a href="https://www.facebook.com/HumanitarismoComunidad/?locale=es_LA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                                </a>
                                <a href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/company/humanitarismo-comunidad/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative pb-4 md:pb-0">
                            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] border-4 border-[#F6A717] rounded-2xl overflow-hidden">
                                <Image
                                    src="/hero-1.jpeg"
                                    alt="Niños sonriendo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}