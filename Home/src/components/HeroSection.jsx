import { Command, Rocket, Search } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl + K (Windows/Linux) ou ⌘ + K (Mac)
            const isMac = navigator.platform.toUpperCase().includes("MAC");
            if ((isMac && e.metaKey && e.key === "k") || (!isMac && e.ctrlKey && e.key === "k")) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="">
            <div className="p-4 w-[95vw] mx-auto flex flex-col items-center justify-center mt-30 gap-5">
                <div className="flex items-center gap-2 backdrop-blur-md shadow border border-blue-600/20 bg-blue-50 rounded-lg px-1.5 py-1">
                    <span className="sm:text-xs text-sm text-blue-600 font-semibold bg-blue-100 lg:px-3 lg:py-1 px-2 rounded-lg">
                        New
                    </span>
                    <span className="sm:text-xs text-sm text-zinc-600 font-light">
                        {/* BuilderMania is now available! */}
                        Buildermania is coming soon!
                    </span>
                    <Rocket className='lg:size-5' />
                </div>
                <div className="">
                    <h1 className="text-5xl font-semibold">Explore Best GPTs on GPT Store</h1>
                </div>
                <div className="w-[50vw]">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-lg px-3 py-2 mt-4">
                        <Search />

                        <input
                            type="text"
                            placeholder="Tape ici..."
                            className="flex-1 border-none outline-none focus:outline-none focus:ring-0 bg-transparent text-sm"
                            aria-label="Barre de recherche"
                        />

                        <div className="flex items-center gap-1 text-zinc-500">
                            <Command className="lg:size-5" />
                            <span className="text-sm font-medium">K</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p>Trending : academic research, coding, image generation, marcketing ...</p>
                </div>

            </div>
        </section>
    );
}