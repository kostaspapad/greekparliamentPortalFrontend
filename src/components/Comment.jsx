class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment_id: props.comment_id,
            comment: props.comment,
            speech_id: props.speech_id,
            user_id: props.user_id,
            created_at: props.created_at,
            user_name: props.user_name
        }
    }
    render() {
        return (
            <div> {user_name} {comment_id} {comment} {speech_id} {user_id} {created_at} </div>
        );
    }
}

export default Comment;