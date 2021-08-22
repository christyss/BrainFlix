import VideoComment from '../../data/video-details.json';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import './Comment.scss';
import React from 'react';

function Comment(props) {
    return (
        <article>
            <form>
                <h2>Comments</h2>
                <div>
                    <img className="comment__user-icon" src="UserIcon" alt="Icon"/>
                </div>
                <div>
                    <h3>JOIN THE CONVERSATION</h3>
                    <textarea type="text" name="input" placeholder="Write comment here"/>
                    <button>COMMENT</button>
                </div>
            </form>
            <section className="allComments">
                {props.comments.map(comment => {
                        return <div className="comments-container">
                            <div>
                                <div className="comments-container__user-icon"></div>
                            </div>                           
                            <div>
                                <h3 className="comments-container__user-name">{comment.name}</h3>
                                <h3 className="comments-container__comment-date">{comment.timestamp}</h3>
                            </div>
                                <p className="comments-container__comment">{comment.comment}</p> 
                        </div>
                })}
            </section>
        </article>
    )
}

export default Comment
