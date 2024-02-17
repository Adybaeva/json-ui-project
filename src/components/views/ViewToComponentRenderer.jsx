import StyleHelper from "../../utils/StyleHelper.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Image from "./Image.jsx";
import Select from "./Select.jsx";
import Text from "./Text.jsx";
import TextArea from "./TextArea.jsx";
import TextField from "./TextField.jsx";

export default function ViewToComponentRenderer({ view }) {
    const { type, style, ...props } = view
    const { webStyle, actions } = StyleHelper.extractStyleData(style) || {}
    const resultProps = { ...props, style: webStyle, actions }

    switch (type) {
        case "container":
            return (
                <Container {...resultProps} />
            )
        case "text":
            return (
                <Text {...resultProps} />
            )
        case "button":
            return (
                <Button {...resultProps} />
            )
        case "image":
            return (
                <Image {...resultProps} />
            )
        case "textfield":
            return (
                <TextField {...resultProps} />
            )
        case "textarea":
            return (
                <TextArea {...resultProps} />
            )
        case "select":
            return (
                <Select {...resultProps} />
            )
        default:
            return null
    }

}