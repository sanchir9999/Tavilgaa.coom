export const Container = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-24 flex-col items-center gap-[10px]" >
                <a className="block" href="#">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/je0iqjm1vmvs7danrz0c.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" href="#">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/oh9lh7xwqnhtsuqi28by.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" >
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/htdneav3fwtg23x2tiul.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" id="hereglee">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/eqqhaslfgbsuqxz9e6je.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" id="beleg">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/qlu5wjxcbbfqkrco5ngx.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" href="#">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/ebn4dj7yjqpisz8knx9k.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <a className="block" href="#">
                    <img
                        src="https://res.cloudinary.com/ddyif81ff/image/upload/zr4wjpdwcuwnx3sxlrql.jpg"
                        alt="Test Image"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] h-auto rounded-md "
                    />
                </a>
                <h4 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-4" id="chanar">
                    <span className="relative inline-block">
                        <span className="relative z-10">Чанарын баталгаа</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] to-[#FF44EC] blur-sm"></span>
                    </span>
                </h4>
                <video
                    src="/Videos/0724.mp4"
                    className="lg:w-[500px] h-[400px]"
                    controls
                    preload="metadata"
                    poster="/path/to/your/thumbnail.jpg"
                >
                    Your browser does not support the video tag.
                </video>


            </div>
        </>
    )
}
