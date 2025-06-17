import { ExternalLink, Star } from "lucide-react";
import PropTypes from "prop-types";

export default function ToolCard({ logo, name, handle, description, rating }) {
    return (
        <div className="rounded-xl border bg-white shadow-sm p-4 w-full max-w-xs hover:shadow-md transition">
            <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src={logo} alt={name} className="w-6 h-6 object-contain" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="mt-4">
                <h3 className="text-base font-semibold">{name}</h3>
                <p className="text-sm text-zinc-500">{handle}</p>
                <p className="text-sm text-zinc-600 mt-1">{description}</p>

                <div className="flex items-center gap-1 text-xs text-zinc-500 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <span>{rating}</span>
                </div>
            </div>
        </div>
    );
}

ToolCard.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};