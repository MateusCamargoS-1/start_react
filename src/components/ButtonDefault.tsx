interface ButtonDefaultProps {
    label: string;
    action: () => void;

}

const ButtonDefault = ({label, action}: ButtonDefaultProps) => {
    return <button onClick={action}>{label}</button>
};

export default ButtonDefault;
