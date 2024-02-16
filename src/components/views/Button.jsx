const Button = ({ style, data, actions }) => {
    console.log({ actions })
    const { title } = data
    return (
        <button className="Button" style={style} {...actions} data-testid="button">{title}</button>
    )
}

export default Button