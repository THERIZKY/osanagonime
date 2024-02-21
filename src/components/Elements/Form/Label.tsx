export default function FormLabel({ labelFor, className, children }: { labelFor: string; className?: string; children: React.ReactNode }) {
	return (
		<label htmlFor={labelFor} className={className}>
			{children}
		</label>
	);
}
