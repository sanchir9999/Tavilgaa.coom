"use client";
import { useTheme } from "../context/ThemeContext";


export default function About() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen p-8 transition-colors duration-500 pt-20
      ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>

            <h1 className="text-4xl font-extrabold mb-6 border-b-4 border-indigo-500 pb-2">
                Бидний тухай
            </h1>
            <p className="max-w-3xl leading-relaxed text-lg space-y-4">
                Манай компани 2024 оны 11 сард 100% дотоодын хөрөнгө оруулалтаар байгууллагдсан компани юм. Одоогоор оффисын тавилгын худалдаагаар мэргэшсэн бөгөөд чанартай, тав тухтай сандлуудыг санал болгодог.
                <br />
                Бид харилцагчийн сэтгэл ханамжийг эрхэмлэдэг.
                <br />
                <strong>Холбоо барих:</strong> <a href="tel:+97688175658" className="text-indigo-500 hover:underline">8817 5658</a>
                <br />
                <strong>Үнийн санал авах:</strong> <a href="mailto:Monhbatsanchir1@gmail.com" className="text-indigo-500 hover:underline">Monhbatsanchir1@gmail.com</a>
            </p>
        </div>
    );
}
