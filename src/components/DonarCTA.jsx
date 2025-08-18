import Link from 'next/link';

export default function DonarCTA() {
    return (
        <section className="pb-16 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#5E17EB] to-[#4c12c4] rounded-2xl p-8 md:p-16 text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Tu ayuda transforma vidas
                    </h2>
                    <p className="text-base text-gray-200 mb-8">
                    Unite a nuestra misión de crear un impacto positivo en las comunidades. 
                        Cada donación nos acerca más a un mundo más justo y solidario.
                    </p>
                    <Link
                        href="https://donaronline.org/humanitarismo-comunidad/ayudanos-a-llegar-a-las-comunidades"
                        target="_blank"
                        className="inline-block bg-[#F6A717] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#e59615] transition-colors duration-300"
                    >
                        Realizar donación
                    </Link>
                </div>
            </div>
        </section>
    );
}
