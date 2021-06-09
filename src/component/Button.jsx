import './Button.scss'

function Button(props) {
        const {text, onclick, color, colorText} = props;
        return <button style={{ background: color, color: colorText}} onClick={onclick}>{text}</button>
}

export default Button