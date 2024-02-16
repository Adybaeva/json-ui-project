const TextArea = ({ style, data, actions }) => {
    return (
        <textarea className="TextArea" style={style} {...actions} {...data} data-testid="textarea" />
    )
}

export default TextArea