import React from 'react'

class Field extends React.Component {

    render() {
        const onDelete = this.props.onDelete
        const onChange = this.props.onChange

        return <div>
            <label htmlFor="name"></label>
            <input size={55}
                   value={this.props.value}
                   name={this.props.name}
                   id={this.props.name}
                   onChange={() => onChange(this.props.nbr)}
                   type="text"/>
            <button onClick={() => onDelete(this.props.nbr)}>Delete</button>
        </div>
    }
}

export default Field