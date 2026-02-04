"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
export default function Home() {
	const router = useRouter();
	const items = [
		{ img: "/imgs/realButton2.png", label: "Aquarium", push: "/aquarium" },
		{ img: "/imgs/realButton2.png", label: "friends", push: "/friends" },
		{ img: "/imgs/realButton2.png", label: "about", push: "/about" },
	];
	const [rotationOffset, setRotationOffset] = useState(0);
	const radius = 180;
	return (
		<div className="flex  min-h-screen min-w-screen w-screen items-center justify-center font-sans ">
			<main className=" min-h-screen h-screen w-9/10 flex flex-row  items-center justify-center sm:items-start overflow-hidden">
				<Image
					height={100}
					width={100}
					src={"/imgs/leftArrowBlue.gif"}
					alt={"left arrow"}
					className="self-center w-1/6 sm:p-10 cursor-grab"
					onClick={() => {
						setRotationOffset((prev) => prev - 1);
					}}
				/>

				<motion.div
					className="relative h-full w-4/6  rounded-full  bg-radial-[at_50%]  from-[#A9E835]/60 to-70% overflow-hidden"
					animate={{
						scale: [1, 1.08, 1],
						opacity: [0.8, 1, 0.8],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}>
					{items.map((item, i) => {
						const angle = (360 / items.length) * (i + rotationOffset);
						const angleRad = angle * (Math.PI / 180);
						console.log(`angleRad ${angleRad} radius ${radius}`);
						const isActive = (i + rotationOffset) % items.length === 0;

						return (
							<motion.div
								key={i}
								className="absolute left-2/6 top-2/5 "
								animate={{
									x: Math.cos(angleRad) * radius,
									y: Math.sin(angleRad) * radius,
									scale: isActive ? 1.3 : 0.8,
									opacity: isActive ? 1 : 0.5,
								}}
								transition={{ duration: 0.3 }}>
								<button
									className={`relative w-[200px] h-[200px] items-center  bg-center bg-size-[205%_120%]  rounded-full p-2 cursor-grab`}
									style={{ backgroundImage: `url(${item.img})` }}
									disabled={!isActive}
									onClick={(e) => {
										e.stopPropagation();
										router.push(item.push);
									}}>
									<h1 className="font-shift text-sm p-8 ">{item.label}</h1>
								</button>{" "}
							</motion.div>
						);
					})}
				</motion.div>
				<Image
					height={100}
					width={100}
					src={"/imgs/rightArrowBlue.gif"}
					alt={"right arrow"}
					className="self-center w-1/6 sm:p-10 cursor-grab"
					onClick={() => {
						setRotationOffset((prev) => prev + 1);
					}}
				/>
			</main>
		</div>
	);
}
