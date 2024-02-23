function Heading({ level, className = "group-hover:scale-110 transition-all duration-300", children }: { level: number; className?: string; children: React.ReactNode }) {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Ini Buat Bkin si Tag Ini Jadi elemen JSX
	return <Tag className={"font-extrabold" + className}>{children}</Tag>;
}

export default Heading;
