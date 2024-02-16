const Image = ({ style, value, actions }) => {
    return (
        <img className="Image" src={value} style={style} {...actions} data-testid="image" />
    )
}

export default Image