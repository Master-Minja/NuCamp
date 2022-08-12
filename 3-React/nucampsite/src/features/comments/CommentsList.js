import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteID } from './commentsSlice';
import { useSelector } from 'react-redux/es/exports';

const CommentsList = ({ campsiteID }) => {
    const comments = useSelector(selectCommentsByCampsiteID(campsiteID))
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteID={campsiteID} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;