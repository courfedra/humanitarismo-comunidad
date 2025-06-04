import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faHeart, faLightbulb, faCompass, faComments, faBookmark, faFaceSmile, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export default function QuienesSomos() {
    return (
        <div className="min-h-screen pt-20">
            {/* Nuestra Historia Section */}
            <section className="bg-[#5E17EB] pt-15 md:pt-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                    <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Nuestra historia
                    </h1>
                    <div className="h-1 bg-[#F6A717] w-24 mx-auto"></div>
                </div>
                    <div className="w-full py-16">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="relative h-[400px]">
                                <Image
                                    src="/monte-quemado.jpeg"
                                    alt="Monte Quemado"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <div className="space-y-6 text-gray-600">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Humanitarismo Comunidad: Un sueno que transforma vidas
                                </h2>
                                <p className="text-gray-300">
                                    Hay sueños que trascienden a quienes los sueñan. Martín Del Farra y Nadia Soledad Perino comenzaron en 2019 esta aventura concreta dando forma al rumbo, un deseo genuino que los unió entorno a la humanidad. Lo que empezó como una idea compartida, pronto se convirtió en una misión que transforma comunidades, personas y realidades.
                                </p>
                                <p className="text-gray-300">
                                    En 2018, Martín dio el primer paso hacia Monte Quemado, Santiago del Estero, Argentina. Allí, se encontró con una comunidad marcada por el aislamiento y la falta de oportunidades. Un año después, un giro inesperado del destino le llevó al repensar, unió fuerzas con Nadia para brindar acompañamiento virtual a los trabajadores sociales de la zona. Así comenzaron a plantarse las primeras semillas de esperanza.
                                </p>
                                <button className="bg-[#F6A717] cursor-pointer text-white px-6 py-2 rounded-full mt-4 hover:bg-[#4c12c4] transition-colors">
                                    Leer más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#5E17EB] mb-2">Misión</h2>
                            <div className="h-1 bg-[#F6A717] w-24"></div>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Nuestra misión es sentar las bases para la formación de personas libres y fuertes, y mejorar la vida en comunidad.
                            </p>
                            <p className="font-bold">¿Cómo lo hacemos?</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Brindamos educación emocional, social y en valores</li>
                                <li>Equipo de docentes y profesionales especializados en educación social y emocional</li>
                                <li>Programas educativos grupales y con atención individualizada</li>
                                <li>Espacios de debate y reflexión</li>
                                <li>Trabajo con las familias, docentes y comunidad educativa</li>
                                <li>Actividades para el bienestar emocional y entrega de herramientas que los preparen para la vida</li>
                                <li>Capacitación de equipos locales para promover la autonomía</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#5E17EB] mb-2">Visión</h2>
                            <div className="h-1 bg-[#F6A717] w-24"></div>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Queremos un mundo en donde vivir en paz y con buena calidad de vida sea una realidad, creando una cultura más humana, generosa y compasiva, donde las personas tengan una sana convivencia con su entorno.
                            </p>
                            <p>
                                Para ello, sabemos que es fundamental adquirir una buena educación social, emocional y en valores.
                            </p>
                            <p>
                                Contribuimos para que esta educación se haga accesible, que esté al alcance de todos y que sea una herramienta que mejore la calidad de vida de las comunidades del mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objetivos ODS Section */}
            <section className="py-16 bg-[#F6A717] w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">
                        Objetivos ODS 2030 alineados con nuestra misión
                    </h2>
                    <div className="h-1 bg-[#5E17EB] w-24 mx-auto"></div>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* ODS 3 Card */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">ODS 3 Salud y bienestar</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">Promovemos el bienestar integral de los jóvenes y adolescentes, a través de programas de educación socioemocional.</p>
                        </div>

                        {/* ODS 4 Card */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">                                    <FontAwesomeIcon icon={faBookmark} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">ODS 4 Educación de calidad</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">Brindamos educación en valores y habilidades socioemocionales, complementando la educación formal y asegurando que tengan acceso a una formación integral de calidad.</p>
                        </div>

                        {/* ODS 8 Card */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faFolderOpen} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">ODS 8 Trabajo decente</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">Preparamos jóvenes con habilidades esenciales para su futuro laboral-emprendedor, fomentando su desarrollo personal y promoviendo el desarrollo económico sostenible.</p>
                        </div>

                        {/* ODS 10 Card */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">                                    <FontAwesomeIcon icon={faFaceSmile} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">ODS 10 Reducción de desigualdades</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">Nuestro trabajo se enfoca en comunidades desfavorecidas, buscando la inclusión de vulnerabilidad brindando oportunidades educativas y promover la inclusión social.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-[#5E17EB] text-white px-6 py-2 rounded-full hover:bg-[#4c12c4] transition-colors">
                            Leer más
                        </button>
                    </div>
                </div>
            </section>

            {/* Propuesta de Valor Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#5E17EB] mb-2">
                        Propuesta de valor
                    </h2>
                    <div className="h-1 bg-[#F6A717] w-24 mx-auto"></div>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Acompañamiento Card */}
                        <div className="bg-white rounded-lg md:p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">Acompañamiento integral</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                Acompañamos a jóvenes de poblaciones vulnerables y de muy difícil acceso para que puedan desarrollar proyectos que promuevan el mejoramiento del tejido social comunitario.
                            </p>
                        </div>

                        {/* Desarrollo Personal Card */}
                        <div className="bg-white rounded-lg md:p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">Desarrollo personal</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                A través de espacios de reflexión comprometida, herramientas de desarrollo personal y social, educación emocional y en valores, promoviendo el fortalecimiento de la autonomía y el trabajo en su proyecto vital significativo.
                            </p>
                        </div>

                        {/* Autonomía Card */}
                        <div className="bg-white rounded-lg md:p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCompass} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">Autonomía y criterio</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                Para que puedan decidir en forma autónoma, forjando juicio propio y con un activo interés en los asuntos comunes, construyendo así un horizonte de prosperidad, solidaridad y cuidado mutuos.
                            </p>
                        </div>

                        {/* Intercambio Social Card */}
                        <div className="bg-white rounded-lg md:p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faComments} className="w-8 h-8 text-[#5E17EB]" fixedWidth />
                                </div>                                <div>
                                    <h3 className="text-xl font-bold text-[#5E17EB] mb-2">Intercambio social</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                Facilitando espacios de intercambio social, para mostrar distintos modelos de funcionamiento, hábitos y formas de vida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestro Equipo Section */}
            <section className="py-16 w-full bg-[#5E17EB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Nuestro equipo
                    </h2>
                    <div className="h-1 bg-[#F6A717] w-24 mx-auto"></div>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="relative h-[400px]">
                            <Image
                                src="/equipo.jpeg"
                                alt="Nuestro equipo"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="space-y-6 text-gray-300">
                            <p>
                                Actualmente, más de 40 colaboradores no remunerados de Argentina y el mundo forman parte de este movimiento. Cada uno aporta su conocimiento y su tiempo para llevar sus frutos. Centrado y apuntalado en la educación, nuestro equipo lleva lugares de esperanza, fortaleza y cambio.
                            </p>
                            <p>
                                Los diferentes equipos, conformados por profesionales reconocidas, son fundamentales en el funcionamiento diario de nuestra Organización, resolviendo y abordando iniciativas en áreas de proyectos, seminarios, eventos, creativos, de gestión institucional y administración.
                            </p>
                            <p>
                                El destino los llevó aún más lejos. En 2019, Nadia más Martín Quemado y descubrió una realidad que golpeó brutalmente: jóvenes que se suicidaban por desesperanza. Para ella, esta problemática era más que un desafio, era su llamado personal. Tras haber perdido a dos hermanos por suicidio, decidió transformar el dolor en amor, resignificándolo en la causa que envolvería todo el entorno comunitario.
                            </p>
                            <button className="bg-[#F6A717] cursor-pointer text-white px-6 py-2 rounded-full mt-4 hover:bg-[#4c12c4] transition-colors">
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}