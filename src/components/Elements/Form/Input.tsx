interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const FormInput: React.FC<FormInputProps> = ({ className, ...props }: any) => {
	return <input {...props} className={className} />;
};

export default FormInput;
