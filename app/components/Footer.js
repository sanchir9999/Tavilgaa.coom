import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-blue-700 text-gray-300 py-5 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* LOGO / SITE NAME */}
                <div>
                    <h2 className="text-xl font-bold mb-2">Tavilgaa.com</h2>
                    <p className="text-sm text-gray-400">Таны тавилгын найдвартай сонголт.</p>
                    <p className="mt-2 text-xs text-gray-500">&copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.</p>
                </div>

                {/* ХОЛБОО БАРИХ */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Холбоо барих</h3>
                    <p className="text-sm">
                        Утас: <a href="tel:+97688175658" className="hover:text-white">+976 88175658</a><br />
                        Утас: <a href="tel:+97699917208" className="hover:text-white">+976 99917208</a><br />
                        Имэйл: <a href="mailto:monhbatsanchir1@gmail.com" className="hover:text-white">monhbatsanchir1@gmail.com</a>
                    </p>
                </div>

                {/* ХОЛБООСУУД */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Хурдан холбоос</h3>
                    <ul className="text-sm space-y-1">
                        <li><a href="/" className="hover:text-white">Нүүр</a></li>
                        <li><a href="/products" className="hover:text-white">Бүтээгдэхүүн</a></li>
                        <Link href="/About" legacyBehavior>
                            <li><a href="/about" className="hover:text-white">Бидний тухай</a></li>
                        </Link>


                        <li><a href="/ordermodel" className="hover:text-white">Захиалах</a></li>
                    </ul>
                </div>

                {/* СОШИАЛ ХОЛБООС */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Сошиал</h3>
                    <div className="flex space-x-4 mt-2">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61565050778397"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition"
                        >
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/halada_shop/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition"
                        >
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a3.7 3.7 0 0 1-1.3-.9c-.4-.4-.7-.8-.9-1.3-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.7.9a5.9 5.9 0 0 0-2.1 1.4A5.9 5.9 0 0 0 .2 4C0 4.9-.2 6-.1 7.3 0 8.6 0 9 0 12s0 3.4.1 4.7c.1 1.3.3 2.4.5 3.3.3.9.8 1.6 1.4 2.2.6.6 1.3 1.1 2.2 1.4.9.3 2 .4 3.3.5 1.3.1 1.7.1 4.7.1s3.4 0 4.7-.1c1.3-.1 2.4-.3 3.3-.5.9-.3 1.6-.8 2.2-1.4.6-.6 1.1-1.3 1.4-2.2.3-.9.4-2 .5-3.3.1-1.3.1-1.7.1-4.7s0-3.4-.1-4.7c-.1-1.3-.3-2.4-.5-3.3-.3-.9-.8-1.6-1.4-2.2a5.9 5.9 0 0 0-2.2-1.4c-.9-.3-2-.4-3.3-.5C15.3 0 14.9 0 12 0zM12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.4-11.6a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
