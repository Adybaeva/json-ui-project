import React from 'react'

const Select = ({ style, data, actions }) => {
    const { options } = data

    return (
        <select className="Select" style={style} {...data} {...actions} data-testid="select">
            {
                options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })
            }
        </select>
    )
}

export default Select