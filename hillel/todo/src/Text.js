import React from 'react'

// export  default function Text () {
class Text extends React.Component {

    render() {
        const switchMode = this.props.switchMode

        return <div onClick={() => switchMode()}>
            ID: {this.props.id}
            Name: {this.props.name}
            User ID: {this.props.userId}
            Completed: {this.props.completed ? 'true' : 'false'}

        </div>
    }


}

export default Text