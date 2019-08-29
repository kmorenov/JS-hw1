import React from 'react'
import PropTypes from 'prop-types'
import Comments from "./Comments";

// export default function Post(props, getComments) {
class Post extends React.Component {

    state = {
        comments: [],
        postComments: [],
        activePosts: [],
        postBody: ''
    }

    static propTypes = {
        albums: PropTypes.array.isRequired
    }

    getComments = () => {
        return fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({comments: response})
            })
    }

    componentDidMount() {
        this.getComments()
    }

    getPostComments = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({postBody: response.title})
            })


        const activePosts = this.state.activePosts
        if (activePosts.includes(postId)){
            const index = activePosts.findIndex(() => postId)
            const updActivePosts = activePosts.slice()
            updActivePosts.splice(index, 1)
            return this.setState({activePosts : updActivePosts})
        }
        this.state.activePosts.push(postId)

        const PostComments = this.state.comments.filter(comment => (comment.postId == postId))
        this.setState({comments: PostComments})
    }

    render() {
        return <><a href="#"//{`https://jsonplaceholder.typicode.com/albums?userId=${props.album}`}
               className={'list-group-item list-group-item-action '}
               onClick={() => this.getPostComments(this.props.post)}
            >
                <header><strong>Post ID:</strong> {this.props.post}</header>
                Post Body: {this.state.postBody}
            </a>
            <Comments
                post={this.props.post}
                comments={this.state.comments}
                updateCounter={this.props.updateCounter}
                activePosts={this.state.activePosts}
            />
            </>
    }
}

Post.propTypes = {
    albums: PropTypes.array
}


export default Post;
