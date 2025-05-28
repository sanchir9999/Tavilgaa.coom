export const Footer = () => {

    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Left хэсэг */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Tavilgaa.com. Бүх эрх хуулиар хамгаалагдсан
                </div>

                {/* Center хэсэг - Холбоо барих */}
                <div className="text-sm">
                    Холбоо барих: <a href="tel:+97612345678" className="hover:text-white">+976 88175658, 99917208</a> |
                    <a href="mailto:info@tavilgaa.com" className="ml-2 hover:text-white">monhbatsanchir1@gmail.com</a>
                </div>
                {/* Right хэсэг - Facebook icon */}
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=61565050778397"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                    </a>
                </div>

            </div>
        </footer>
    );
};
