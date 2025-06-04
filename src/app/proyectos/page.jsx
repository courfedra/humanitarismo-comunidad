import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: "+Cine",
            description: "Llevamos el cine como herramienta de transformación social",
            link: "/projects/cine"
        },
        {
            title: "+Sueños",
            description: "Impulsamos los sueños de niños y jóvenes en comunidades vulnerables",
            link: "/projects/suenos"
        },
        {
            title: "+Jóvenes",
            description: "Empoderamos a los jóvenes para ser agentes de cambio en sus comunidades",
            link: "/projects/jovenes"
        }
    ];

    return (
        <main className="flex items-center justify-center min-h-screen">
            <h1 className="text-5xl">Proximamente</h1>
        </main>
    );
}
