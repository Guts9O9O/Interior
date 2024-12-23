import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"

export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left">
                    WHO ARE WE?
                </h1>
            </div>
            <div className="container">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">Your Vision, Our Craft</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                        At ShivInterior, we transform ideas into stunning realities. With a passion for design and an eye for detail, we create personalized interiors that inspire and delight.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="Gallery image showcasing interior design" />
                    </div>
                    <div>
                        <p className="pb-8 tracking-wide">
                            At ShivInterior, we believe in the power of thoughtful design to transform any space. Our team combines creativity, expertise, and the latest trends to deliver exceptional results that exceed expectations. Every project begins with understanding your vision, followed by a meticulous design process that ensures the highest quality materials and craftsmanship. From concept to completion, we are committed to bringing your dream space to life with unmatched precision and attention to detail.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight">
                                At ShivInterior, we share a belief in the transformational power of people united in a common purpose.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt="Profile image of XYZ" className="mx-auto rounded-full" />
                                <h2 className="py-4 text-2xl font-semibold">XYZ</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100">
                                <Image src="/image/profile1.jpg" width={200} height={200} alt="Profile image of Shiv" className="mx-auto rounded-full" />
                                <h2 className="py-4 text-2xl font-semibold">Shiv</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100">
                                <Image src="/image/profile3.jpg" width={200} height={200} alt="Profile image of XYZ" className="mx-auto rounded-full" />
                                <h2 className="py-4 text-2xl font-semibold">XYZ</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
