export default function Baner({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className="text-center animate-pulse text-black text-xl font-mono">
				20% off to the end of 31 Jan 2025
			</div>
			{children}
		</div>
	);
}
