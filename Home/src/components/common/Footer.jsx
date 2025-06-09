export default function Footer() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="p-4 w-[95vw] mx-auto flex justify-center items-center ">
                <span>
                    &copy; {new Date().getFullYear()} 2MJ-DEV. Tous droits réservés.
                </span>
            </div>
        </section>
    );
}