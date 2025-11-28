import Image from "next/image";
import Link from "next/link";

export default function Aquarium() {
	return (
		<div className="w-full min-h-screen grid grid-cols-12 grid-rows-12 bg-linear-to-b from-1% via-blue-300 to-99%">
			<Link className="w-full row-span-1 col-span-1" href={"/"}>
				<Image
					src={"/imgs/back.gif"}
					width={100}
					height={100}
					alt="back-button"
					className="left-10 align-top items-baseline p-5"
				/>
			</Link>
			<div className=" p-4 m-4 sm:m-6 row-span-11 col-span-11 grid grid-cols-11 grid-rows-11  relative bg-zinc-200/15 rounded-4xl">
				<div className="col-span-9 row-span-8 bg-[url(/imgs/tankbackground.jpg)] bg-cover bg-center z-10 -mr-32 -mb-15 rounded-4xl "></div>
				<div className=" w-full col-end-12 col-span-2 row-span-11 bg-[url(/imgs/sidebarAquarium.png)] bg-size-[100%_100%] bg-center bg-no-repeat z-20 grid grid-rows-9 grid-cols-7 ">
					<button className="rounded-full bg-radial-[at_50%_75%] from-[#A9E835] to-[#012501] col-start-5 col-end-7 row-start-2 row-end-2 h-6/9  border-4 border-[#777777]"></button>
					<button className="rounded-full bg-radial-[at_50%_75%] from-[#A9E835] to-[#012501] col-start-5 col-end-7 row-start-3 row-end-3 h-6/9 border-4 border-[#777777]"></button>
					<button className="rounded-full bg-radial-[at_50%_75%] from-[#A9E835] to-[#012501] col-start-5 col-end-7 row-start-4 row-end-4 h-6/9 border-4 border-[#777777]"></button>
					<button className="rounded-full bg-radial-[at_50%_75%] from-[#A9E835] to-[#012501] col-start-4 col-end-7 row-start-7 row-end-9 h-6/9 border-4 border-[#777777]"></button>
				</div>
				<div className="w-full col-span-9 row-span-3 row-end-12 bg-[url(/imgs/downbarAquarium.png)] bg-size-[70%_80%] bg-center bg-no-repeat z-20 flex items-center justify-center">
					<div className="bg-radial-[at_50%_75%] from-[#394714] to-[#36980F]  text-[#BBD189] rounded-4xl bg-center justify-self-center  bg-contain w-1/3 h-5/9 border-4">
						<p className="p-5">This is just a fish</p>
					</div>
				</div>
			</div>
		</div>
	);
}
