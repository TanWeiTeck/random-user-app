interface IProps extends React.HTMLProps<HTMLButtonElement> {
    icon?: JSX.Element;
    text?: string;
    secondary?: boolean;
}
const Button = ({
    icon,
    text,
    secondary,
    type = 'button',
    ...rest
}: IProps) => {
    return (
        <button
            className={`flex w-fit cursor-pointer items-center gap-2 rounded-md border px-6 py-3 duration-300 ${
                secondary
                    ? 'border-white bg-cyan-400 text-white hover:border-cyan-400 hover:bg-white hover:text-cyan-400 '
                    : 'border-cyan-400 bg-white text-cyan-400 hover:border-white hover:bg-cyan-400 hover:text-white'
            }`}
            {...rest}
        >
            {icon && <div className="h-5 w-5">{icon}</div>}
            <span className="whitespace-nowrap">{text ?? 'Button'}</span>
        </button>
    );
};

export default Button;
