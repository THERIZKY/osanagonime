export default function FormTextArea({ className, ...props }: { className?: string }) {
	return <textarea {...props} className={className} />;
}
