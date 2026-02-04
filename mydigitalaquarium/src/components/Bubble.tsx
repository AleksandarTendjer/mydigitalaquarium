import { motion } from "motion/react";

function getRandom(x: number): number {
	const val = Math.random() * x;
	return val;
}
type BubbleProps = {
	delay: number;
};
export default function Bubble({ delay }: BubbleProps) {
	const startX = getRandom(20); // slight horizontal offset
	const drift = getRandom(30) - 15; // +- px

	return (
		<motion.img
			src="/imgs/bubble.png"
			alt="bubble"
			className="absolute top-30 left-5 w-5 h-5 pointer-events-none"
			initial={{ y: 0, x: startX, opacity: 0 }}
			animate={{
				y: -400,
				x: startX + drift,
				opacity: [0, 1, 1, 0],
			}}
			transition={{
				duration: 6,
				delay,
				ease: "easeOut",
			}}
		/>
	);
}
