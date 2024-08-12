"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="w-[1400px] m-auto">
            {/* Эхний хэсэг */}
            <div className="w-[289px] flex justify-center items-center mt-5 lg:justify-center lg:pl-0">
                <div className="flex flex-col gap-[24px] pl-10 lg:pl-0 justify-center items-center">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="font-bold text-2xl text-black">Тухай</h2>
                        </div>
                        <div className="pl-9 lg:pl-8">
                            <p className="font-normal text-2xl text-[#696A75] lg:flex lg:justify-center">
                                Бүгд нийлээд 250k
                                Gaming ширээ LED гэрэлтэй
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>✅ 120x60x74см Стандарт хэмжээ</li>
                                <li>✅ Маш сайн зузаан тавцантай</li>
                                <li>✅ Ган төмөр хөлтэй</li>
                                <li>✅ 45mm зузаантай бат бөх</li>
                                <li>✅ Ямар ч хөдөлгөөн байхгүй</li>
                            </ul>
                            Бэлгэнд:
                            <ul className="list-disc pl-6 mt-2 space-y-2" id="Utas">
                                <li>🎁 Airpodmax</li>
                                <li>🎁 Bluetooth LED гэрэл RGB өнгөөр асна</li>
                            </ul>
                            <span className="phone-number text-[#3B3C4A] cursor-pointer text-3xl">88175658</span>
                            <br />
                            Зарах нь шинээрээ хайрцагтайгаа угсраагүй байгаа чихэвч led мөн адил хайрцагтайгаа
                            <br />
                            🚗 ХҮРГЭЛТ ҮНЭГҮЙ
                        </div>
                    </div>
                    <div>
                        <div className="flex pl-6 lg:pl-8">
                            <p className="text-[#181A2A] text-xl font-bold">Email: </p>
                            <p className="text-[#3B3C4A] text-xl"> Monhbatsanchir1@gmail.com</p>
                        </div>
                        <div className="flex pl-6 lg:pl-8" id="Utas">
                            <p className="text-[#181A2A] text-xl font-bold">Phone: </p>
                            <p className="phone-number text-[#3B3C4A] text-xl">+976 88175658</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[24px] items-center mt-5 pl-6 overflow-x-auto whitespace-nowrap lg:justify-center h-24">
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#chanar" title="Чанар" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Чанар</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#beleg" title="Бэлэг" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Бэлэг</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#hereglee" title="Хэрэглээ" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Хэрэглээ</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#Utas" title="Утас" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Утас</a>
                </div>

            </div>
            {/* Социаль медиа холбоосууд */}
            <div className="flex gap-[40px] lg:justify-center mt-5 pl-10 ml-9 ">
                <Link href="https://www.facebook.com/profile.php?id=61550748899169/" passHref>
                    <FaFacebook className="w-16 h-16 text-blue-600" />
                </Link>
                <Link href="https://www.instagram.com/" passHref>
                    <BsInstagram className="w-16 h-16 text-pink-500" />
                </Link>
                <Link href="https://www.youtube.com/" passHref>
                    <BsYoutube className="w-16 h-16 text-red-600 " />
                </Link>
            </div>
            <a href="#">
                <div
                    className="w-full lg:justify-center lg:flex ml-24 mt-11" >
                    <img src="https://res.cloudinary.com/ddyif81ff/image/upload/v1723469715/uvzj3cvl9a0azzub5p7l.png" alt="Test Image" className='h-[100px] lg:h-[160px]' />
                </div>
            </a>
        </div>
    );
};
