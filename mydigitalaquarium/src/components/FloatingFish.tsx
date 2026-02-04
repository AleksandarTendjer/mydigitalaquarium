"use client";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const getRandomInt = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

type FishProps = {
	delay: number;
	img: string;
	label: string;
};

export default function FloatingFish({ delay, img, label }: FishProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	const positions = useMemo(
		() => ({
			x: getRandomInt(30, 70),
			y: getRandomInt(20, 60),
			drift: getRandomInt(-30, 30),
		}),
		[],
	);

	// Don't render anything until we have a position on the client
	if (!isMounted) {
		return null;
	}
	return (
		<motion.img
			src={img}
			alt={label}
			style={{
				left: `${positions.x}%`,
				top: `${positions.y}%`,
				x: "-50%",
				y: "-50%",
				opacity: 1,
			}}
			width={100}
			height={100}
			className={`absolute w-5 h-5 pointer-events-none  block z-100 object-contain  `}
			animate={{
				y: [0, -100, -200, -300],
				x: [0, positions.drift, -positions.drift, 0],
			}}
			transition={{
				duration: 5,
				delay: delay,
				repeat: Infinity, // Keeps the fish swimming
				ease: "linear",
			}}
		/>
	);
}
