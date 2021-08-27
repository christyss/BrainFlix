import React from 'react';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import videoDate from '../../Utils/timestamp-function';
import './Comment.scss';
import './InputComment.scss';

function Comment({videoComments}) {
    return (
        <article>
            <form className="comment-form">
                <h2 className="comment-form__title">{videoComments.comments.length} Comments</h2>
                <div className="comment-form__user-input">
                    <div className="comment-form__user">
                        <img className="comment-form__user-icon" src={UserIcon} alt="Icon"/>
                    </div>
                    <div className="comment-form__input">
                        <h3 className="comment-form__input-title">JOIN THE CONVERSATION</h3>
                        <div className="comment-form__input-action">
                            <textarea className="comment-form__input-action-area" type="text" name="input" placeholder="Write comment here"/>
                            <button className="comment-form__input-action-btn">COMMENT</button>
                        </div>
                    </div>
                </div> 
            </form>
            <section className="all-comments">
                {videoComments.comments.map(comment => {
                    return <div key={comment.id} className="comment-container">
                                    <div className="comment-container__icon"></div> 
                                <div className="comment-container__comment">                        
                                    <div className="comment-container__comment-user">
                                        <h3 className="comment-container__comment-user-name">{comment.name}</h3>
                                        <h3 className="comment-container__comment-user-date">{videoDate(comment.timestamp)}</h3>
                                    </div>
                                    <p className="comment-container__comment-text">{comment.comment}</p> 
                                </div> 
                            </div>
                })}
            </section>
        </article>
    )
}

export default Comment
