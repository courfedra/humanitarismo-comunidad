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
        <div className="pt-30 md:pt-20">
            <section className="min-h-[85vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Content */}
                        <div className="space-y-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#5E17EB] leading-tight mb-8">
                                    Humanitarismo Comunidad
                                </h1>

                                <div className="flex gap-6 items-stretch">
                                    {/* <div className="w-32 relative shrink-0">
                                        <Image
                                            src="/hero-2.jpeg"
                                            alt="Niños ayudando"
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div> */}
                                    <div className="border-l-2 border-[#5E17EB] pl-4 md:pl-6 flex-1">
                                        <p className="text-gray-600 text-base mb-4">
                                            Nuestra misión es sentar las bases para la formación de personas libres y fuertes, y mejorar la vida en comunidad.</p>
                                        <Link
                                            href="/donar"
                                            className="inline-flex items-center bg-[#5E17EB] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#4c12c4] transition-colors"
                                        >
                                            Donar
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 mb-10 md:mb-0">
                                <a href="mailto:contacto@humanitarismo.com"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                                </a>
                                <a href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                </a>
                                <a href="https://facebook.com"
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
                                <a href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#5E17EB] transition-colors duration-300">
                                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative pb-4 md:pb-0">
                            <div className="relative h-[450px] md:h-[600px]">
                                {/* Top left yellow dots */}
                                <div className="absolute -top-8 -left-8 w-24 h-24 text-[#F6A717] z-10">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <g fill="currentColor">
                                            {[...Array(25)].map((_, i) => (
                                                <circle
                                                    key={i}
                                                    cx={10 + (i % 5) * 20}
                                                    cy={10 + Math.floor(i / 5) * 20}
                                                    r={3}
                                                />
                                            ))}
                                        </g>
                                    </svg>
                                </div>

                                <Image
                                    src="/hero-1.jpeg"
                                    alt="Niños sonriendo"
                                    fill
                                    className="object-cover rounded-2xl"
                                    priority
                                />

                                {/* Bottom right purple dots */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 text-[#5E17EB]">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <g fill="currentColor">
                                            {[...Array(25)].map((_, i) => (
                                                <circle
                                                    key={i}
                                                    cx={10 + (i % 5) * 20}
                                                    cy={10 + Math.floor(i / 5) * 20}
                                                    r={3}
                                                />
                                            ))}
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}