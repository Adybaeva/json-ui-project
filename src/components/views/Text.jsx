const Text = ({ style, data, actions }) => {
    const { value } = data
    return (
        <p className="Text" style={style} {...actions} data-testid="text">{value}</p>
    )
}

export default Text