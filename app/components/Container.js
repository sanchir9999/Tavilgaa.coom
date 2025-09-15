"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} price
 * @property {string} imageUrl
 * @property {boolean} available
 * @property {"chair"|"table"} category
 */

/** @type {Product[]} */
const chairs = [
    {
        slug: "office-chair-1",
        name: "Оффис Сандал",
        price: "₮100,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379481/01c4fb9a-96d1-464b-a035-32df5dc1a030_iqijn9.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "gaming-chair",
        name: "Gaming Сандал",
        price: "₮350,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
        available: false,
        category: "chair",
    },
    {
        slug: "guest-chair",
        name: "Зочны сандал",
        price: "₮90,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: false,
        category: "chair",
    },
    {
        slug: "office-chair-2",
        name: "Оффис Сандал",
        price: "₮383,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-3",
        name: "Оффис Сандал",
        price: "₮400,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/0050fd0dac735ed9d02f0a370ee23629_jdskuc.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-4",
        name: "Оффис Сандал",
        price: "₮385,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/910cf650c38767dd48acaa39786ebd09_h7epnj.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-5",
        name: "Оффис Сандал",
        price: "₮375,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/be9258e84d4fadc02ba3fb31b9bdfd64_k8saxt.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "training-chair-black",
        name: "Сургалтын сандал (Хар)",
        price: "₮150,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750854362/e85a6b3f7fd1ee09a4d2989f050f3d64_1_qmeycj.jpg",
        available: true,
        category: "chair",
    },
];

/** @type {Product[]} */
const tables = [
    {
        slug: "office-table",
        name: "Оффис Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
        category: "table",
    },
    {
        slug: "guest-table",
        name: "Зочны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/44a9f1298c471d1b9fb86fb41e97c7dd_e1gqzd.jpg",
        available: false,
        category: "table",
    },
    {
        slug: "dining-table",
        name: "Хоолны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
        available: false,
        category: "table",
    },
    {
        slug: "pc-desk-set",
        name: "Компьютерын ширээ сандал",
        price: "₮300,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379232/d4651328-edfc-47dd-94f3-4815eb22ae9c_ujvtjz.jpg",
        available: true,
        category: "table",
    },
];

const PRODUCTS = [...chairs, ...tables];

const Section = ({ title, subtitle, children }) => (
    <section className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {/* Subtitle hidden to keep UI concise */}
        </div>
        {children}
    </section>
);

const StockBadge = ({ available }) => (
    <div className="absolute left-2 top-2">
        <Badge variant={available ? "default" : "secondary"} className="rounded-full">
            {available ? "Бэлэн" : "5 хоногт Улаанбаатарт ирнэ"}
        </Badge>
    </div>
);

const ProductCard = ({ product }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="group relative rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
    >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                priority={false}
            />
            <StockBadge available={product.available} />
        </div>

        <div className="p-3 md:p-4 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm md:text-base font-semibold leading-tight line-clamp-2">
                    {product.name}
                </h3>
                <Badge variant="outline" className="whitespace-nowrap hidden">
                    {product.category === "chair" ? "Сандал" : "Ширээ"}
                </Badge>
            </div>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">{product.price}</p>

            <div className="mt-auto pt-3">
                <Link href={`/products/${product.slug}`}>
                    <Button className="w-full">Захиалах</Button>
                </Link>
            </div>
        </div>
    </motion.div>
);

const PartnerStrip = () => {
    const partners = [
        { name: "ErgoForm", logo: "/partners/ergoform.svg" },
        { name: "HomePro", logo: "/partners/homepro.svg" },
        { name: "DesignLab", logo: "/partners/designlab.svg" },
        { name: "OfficePlus", logo: "/partners/officeplus.svg" },
        { name: "WoodWorks", logo: "/partners/woodworks.svg" },
    ];

    return (
        <div className="border-y bg-white/70 dark:bg-gray-900/50 dark:border-white/10 backdrop-blur">
            <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-8 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
                    {partners.map((p) => (
                        <div
                            key={p.name}
                            className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
                        >
                            {p.logo ? (
                                <Image
                                    src={p.logo}
                                    alt={p.name}
                                    width={140}
                                    height={36}
                                    className="object-contain"
                                />
                            ) : (
                                <span className="text-sm font-medium">{p.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CategoryChips = ({ active, onChange }) => (
    <div className="flex flex-wrap items-center justify-center gap-2">
        {[
            { key: "all", label: "Бүгд" },
            { key: "chair", label: "Сандлууд" },
            { key: "table", label: "Ширээнүүд" },
        ].map((c) => (
            <Button
                key={c.key}
                variant={active === c.key ? "default" : "outline"}
                size="sm"
                onClick={() => onChange(c.key)}
                className="rounded-full"
            >
                {c.label}
            </Button>
        ))}
    </div>
);

// ----------------------
// ЗӨВХӨН НЭГ default ЭКСПОРТ!!!
// ----------------------
export default function Container() {
    const [category, setCategory] = useState("all");
    const filtered = PRODUCTS.filter((p) =>
        category === "all" ? true : p.category === category
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            {/* Hero */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
                <Section
                    title="Орчин үеийн тавилгын цуглуулга"
                    subtitle="Эргоном загвар, чанартай материал, шуурхай нийлүүлэлт — бизнес ба гэрийн орчинд тохирох шийдлүүд."
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="hidden items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary">Шинэ цуглуулга</Badge>
                            <span>2025 / Намар</span>
                        </div>
                        <div className="mt-2">
                            <Link href="#products">
                                <Button size="lg" className="rounded-full">
                                    Бүтээгдэхүүн үзэх
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Section>
                <PartnerStrip />
            </header>

            {/* Гол ангиллууд */}
            <Section title="Ангиллууд" subtitle="Үндсэн бүтээгдэхүүний төрөл">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { key: "chair", title: "Сандал", href: "/category/chairs", img: chairs[0]?.imageUrl },
                        { key: "table", title: "Ширээ", href: "/category/tables", img: tables[0]?.imageUrl },
                        { key: "set", title: "Комплект", href: "/category/sets", img: tables[3]?.imageUrl },
                        { key: "accessory", title: "Дагалдах хэрэгсэл", href: "/category/accessories", img: chairs[1]?.imageUrl },
                    ].map((c) => (
                        <Link
                            key={c.key}
                            href={c.href}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                        >
                            {c.img ? (
                                <Image
                                    src={c.img}
                                    alt={c.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100"
                                />
                            ) : null}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <span className="inline-block px-3 py-1 rounded-full text-white text-sm bg-black/50 backdrop-blur">
                                    {c.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Шүүлтүүртэй бүтээгдэхүүн */}
            <Section title="Онцлох бүтээгдэхүүн" subtitle="Бэлэн бараа ба урьдчилсан захиалга">
                <div className="mb-6">
                    <CategoryChips active={category} onChange={setCategory} />
                </div>

                <div
                    id="products"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 scroll-mt-24"
                >
                    {filtered.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                    ))}
                </div>
            </Section>

            {/* Хамтрагч байгууллагууд */}
            <Section
                title="Хамтран ажилладаг байгууллагууд"
                subtitle="Оффис интерьер, барилга угсралт, логистик, санхүүгийн түншүүд"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {[
                        "/partners/partner1.svg",
                        "/partners/partner2.svg",
                        "/partners/partner3.svg",
                        "/partners/partner4.svg",
                        "/partners/partner5.svg",
                        "/partners/partner6.svg",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Partner ${i + 1}`}
                                width={120}
                                height={36}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section
                title="Төслийн нийлүүлэлт, B2B захиалга"
                subtitle="Ажлын байрны стандартчилагдсан шийдлээс эхлээд, тусгай загвар боловсруулах хүртэл бүтэн үйлчилгээ. Үнийн санал авах бол доорх товчийг дарна уу."
            >
                <div className="flex justify-center">
                    <Link href="/quote">
                        <Button size="lg">Үнийн санал авах</Button>
                    </Link>
                </div>
            </Section>

            {/* <footer className="border-t bg-white/80"> */}
            {/* footer removed */}
        </div>
    );
}
