import ToolCard from "./ToolCard";

const tools = [
    {
        logo: "logos", // place un vrai chemin ou utilise un composant
        name: "Nomad List",
        handle: "@Photoai.com",
        description: "Customizable AI for enhanced financial insights and learning.",
        rating: 4.3,
    },
    {
        logo: "logos",
        name: "DALL +",
        handle: "@João Pais",
        description: "Image generator with simple settings, able to better depict for your imagine.",
        rating: 4.1,
    },
    {
        logo: "logos",
        name: "Job Match",
        handle: "@L3v3l.ai",
        description: "I find the best-fit jobs for you by matching their criteria.",
        rating: 4.2,
    },
    {
        logo: "logos",
        name: "Code Tutor",
        handle: "@Khanacademy.org",
        description: "I won’t write the code for you, but I’ll help you work things out.",
        rating: 4.4,
    },
];

export default function ToolGrid() {
    return (
        <section className=''>
            <div className="flex flex-col items-center w-[95vw] mx-auto gap-4 py-10">
                <div className="flex justify-center items-center w-[11vw] h-9 gap-2 bg-zinc-50 rounded-lg">
                    <button className="px-3 py-1 rounded-md bg-zinc-900 text-white text-sm">Popular</button>
                    <button className="px-3 py-1 rounded-md text-sm">Recents</button>
                </div>

                <div className="flex gap-4">
                    {tools.map((tool, index) => (
                        <ToolCard key={index} {...tool} />
                    ))}
                </div>
            </div>
        </section>
    );
}