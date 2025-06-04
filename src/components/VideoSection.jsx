export default function VideoSection() {
    return (
        <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#5E17EB] mb-2">
                    Conoce nuestra labor
                </h2>
                <div className="h-1 bg-[#F6A717] w-24 mx-auto mb-8"></div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/avH2irMKlk4"
                        title="Humanitarismo Comunidad"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
