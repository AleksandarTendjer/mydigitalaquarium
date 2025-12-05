"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
export default function Home() {
	const router = useRouter();
	const items = [
		{ img: "/imgs/diveIntoGif.gif", label: "diveIn", push: "/aquarium" },
		{ img: "/imgs/friendsGif.gif", label: "friends", push: "/friends" },
		{ img: "/imgs/aboutGif.gif", label: "about", push: "/about" },
	];
	const [rotationOffset, setRotationOffset] = useState(0);
	const radius = 180;
	console.log(items.length);
	return (
		<div className="flex min-h-screen items-center justify-center font-sans ">
			<main className="flex min-h-screen  h-screen w-full max-w-3xl flex-col items-center justify-between    sm:items-start">
				<motion.div
					className="relative h-[900px] w-[900px]  rounded-full  bg-radial-[at_50%] from-[#A9E835]/60 to-70% "
					animate={{
						scale: [1, 1.08, 1],
						opacity: [0.8, 1, 0.8],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					onClick={() => {
						setRotationOffset((prev) => prev + 1);
					}}>
					{items.map((item, i) => {
						const angle = (360 / items.length) * (i + rotationOffset);
						const angleRad = angle * (Math.PI / 180);
						console.log(`angleRad ${angleRad} radius ${radius}`);
						const isActive = (i + rotationOffset) % items.length === 0;

						return (
							<motion.div
								key={i}
								className="absolute left-1/4 top-2/5 "
								animate={{
									x: Math.cos(angleRad) * radius,
									y: Math.sin(angleRad) * radius,
									scale: isActive ? 1.3 : 0.8,
									opacity: isActive ? 1 : 0.5,
								}}
								transition={{ duration: 0.3 }}>
								<button
									className="relative w-[180px] h-[180px]   bg-linear-to-b from-10% via-zinc-400 to-80% rounded-full p-2  hover:from-zinc-400 hover:via-transparent hover:to-zinc-400 hover:border-2 hover:border-dotted"
									disabled={!isActive}
									onClick={(e) => {
										e.stopPropagation();
										router.push(item.push);
									}}>
									<Image fill src={item.img} alt={item.label} />
								</button>{" "}
							</motion.div>
						);
					})}
				</motion.div>
			</main>
		</div>
	);
}
