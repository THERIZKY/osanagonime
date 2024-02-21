interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }: any) => {
	return <button {...props}>{children}</button>;
};

export default Button;
