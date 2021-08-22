import VideoComment from '../../data/video-details.json';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import './Comment.scss';
import React from 'react';

function Comment(props) {
    return (
        <article>
            <form className="comment-form">
                <h2 className="comment-form__title">{}Comments</h2>
                <div className="comment-form__user-input">
                    <div className="comment-form__user-input comment-form__user">
                        <img className="comment-form__user-icon" src={UserIcon} alt="Icon"/>
                    </div>
                    <div className="comment-form__user-input comment-form__input">
                        <h3 className="comment-form__input-title">JOIN THE CONVERSATION</h3>
                        <textarea className="comment-form__input-area" type="text" name="input" placeholder="Write comment here"/>
                        <button className="comment-form__input-btn">COMMENT</button>
                    </div>
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
