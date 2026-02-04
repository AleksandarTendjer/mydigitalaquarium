"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Bubble from "@/components/Bubble";
import FloatingFish from "@/components/FloatingFish";
type BubbleItem = {
	id: string;
	createdAt: number;
};
type ActiveFish = {
	id: string;
	description: string;
	img: string;
	label: string;
};
const floatingFishItems = [
	{
		img: "/imgs/fish1.png",
		label: "fish1",
		description: "",
		id: 1,
	},
	{ img: "/imgs/fish2.png", label: "fish2", description: "", id: 2 },
	{ img: "/imgs/fish3.png", label: "fish3", description: "", id: 3 },
];
export default function Aquarium() {
	const [bubbles, setBubbles] = useState<BubbleItem[]>([]);
	const [activeFish, setActiveFish] = useState<ActiveFish>();

	useEffect(() => {
		const interval = setInterval(() => {
			setBubbles((prev) => {
				const now = Date.now();

				const next = [...prev, { id: crypto.randomUUID(), createdAt: now }];
				return next.filter((b) => now - b.createdAt < 12_000);
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	//

	return (
		<div className="w-full min-h-screen grid grid-cols-13 grid-rows-13 ">
			<Link
				className="w-full col-start-1 row-start-1 row-end-1 col-end-1"
				href={"/"}>
				<Image
					src={"/imgs/back.gif"}
					width={100}
					height={100}
					alt="back-button"
					className="left-10 align-top items-baseline p-5"
				/>
			</Link>
			<motion.div className=" p-4 m-4 sm:m-6  row-start-1 col-start-1 row-span-13 col-span-13 grid grid-cols-3 grid-rows-4 sm:grid-cols-12 sm:grid-rows-12 relative rounded-4xl">
				<div className="relative col-start-1 col-span-2 row-start-1 row-span-3  sm:col-start-1 sm:col-span-9 sm:row-start-1 sm:row-span-9 bg-[url(/imgs/aquariumFram3.png)]  bg-size-[100%_100%] bg-no-repeat bg-center z-10 -mr-32 -mb-15  min-h-[300px] min-w-[300px] ">
					{bubbles.map((bubble, i) => (
						<Bubble key={bubble.id} delay={i * 0.2} />
					))}
					{floatingFishItems.map((fish, i) => (
						<FloatingFish key={i} img={fish.img} label={fish.label} delay={1} />
					))}
				</div>
				<div className="w-full col-start-3 col-span-1  row-start-1 row-span-3 sm:col-start-10 sm:col-end-13 sm:row-start-2 sm:row-span-12 bg-[url(/imgs/sidebarAquarium.png)] bg-size-[100%_100%] bg-center bg-no-repeat z-20 grid grid-rows-12 grid-cols-12 filter drop-shadow-[0_20px_20px_rgba(1,37,1,0.7)]"></div>
				<div className="w-full col-start-1 col-span-3  row-start-4 row-span-1 sm:col-start-1 sm:col-span-9 sm:row-start-10 sm:row-span-3 bg-[url(/imgs/downbar.png)] bg-size-[90%_80%] bg-center bg-no-repeat z-20 items-center flex flex-row filter drop-shadow-[0_20px_20px_rgba(1,37,1,0.7)]">
					<div className="w-2/12"></div>
					<div className="w-1/12"></div>
					<div className="  text-[#36980F] text-shadow-lg font-shift rounded-4xl bg-center justify-self-center  bg-contain w-4/12 h-5/9  ">
						<p className="p-5">{activeFish?.description}</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
