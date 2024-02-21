interface FormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, ...props }: any) => {
	return <form {...props}>{children}</form>;
};

export default FormContainer;
