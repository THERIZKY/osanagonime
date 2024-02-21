interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
	return (
		<div {...props} className={className}>
			{children}
		</div>
	);
};

export default Content;
