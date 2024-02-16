const TextField = ({ style, data, actions }) => {
    return (
        <input className="TextField" style={style} {...data} {...actions} data-testid="textfield"/>
    )
}

export default TextField