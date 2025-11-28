"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
			<main className="flex min-h-screen  h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16   sm:items-start">
				<ul className="flex flex-col w-full h-full justify-center items-center">
					<li className="my-5 w-full h-full">
						<button
							className="relative w-full h-full  customCursor bg-linear-to-b from-10% via-zinc-400 to-80% rounded-e-full p-2  hover:from-zinc-400 hover:via-transparent hover:to-zinc-400 "
							onClick={() => router.push("/aquarium")}>
							<Image fill src={"/imgs/diveIn.gif"} alt="diveIn" />
						</button>
					</li>
					<li className="my-5 w-full h-full">
						<button className=" relative w-full h-full hover-friends p-3 bg-linear-to-b from-10% via-zinc-400 to-80% rounded-e-full   hover:from-zinc-400 hover:via-transparent hover:to-zinc-400">
							<Image fill src={"/imgs/friends.gif"} alt="friends" />
						</button>
					</li>
					<li className=" my-5 w-full h-full">
						<button className="relative w-full h-full  hover-about bg-linear-to-b from-10% via-zinc-400 to-80% rounded-e-full rounded-3xl p-2 hover:from-zinc-400 hover:via-transparent hover:to-zinc-400">
							<Image fill src={"/imgs/about.gif"} alt="about" />
						</button>
					</li>
				</ul>
			</main>
		</div>
	);
}
