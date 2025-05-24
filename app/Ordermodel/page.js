"use client";
import { Ordermodel } from '../Ordermodel/Ordermodel';

export default function Order() {
    const sampleProduct = {
        name: "Кофе",
        price: "100,000₮",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748089010/mbrz0qu9zzcv4dylolgr.jpg"
    };

    return (
        <Ordermodel
            isOpen={true}
            onClose={() => alert("Модал хаагдлаа")}
            product={sampleProduct}
        />
    );
}