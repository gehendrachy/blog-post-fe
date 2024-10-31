import React, { useState } from 'react'
import { UserComment } from './UserComment'

export default function CommentComponent() {

    const [comment, setComment] = useState("");
    
    const handleOnSubmit = (e) => {
        e.PreventDefault();
        
    }

    const handleOnChange = (e) => {
        setComment(e.target.value);
    }

    return (
        <>
            <form className="mb-3" onSubmit={handleOnSubmit}>
                <textarea onChange={handleOnChange} className="form-control" placeholder="Write your comments here.." value={comment} rows="3"></textarea>
                <button type="submit" className="btn btn-dark mt-3 ">Submit</button>
            </form>

            <div className="mb-3">
                <ul className="list-group">
                    <UserComment userName="Jane Doe" comment="This is comment" />
                    <UserComment userName="Jane Doe" comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta facere ea, sunt tempore eaque harum vel cupiditate laboriosam ducimus voluptatibus modi aliquid incidunt reiciendis, veritatis rerum deserunt amet eveniet." />
                    <UserComment userName="John Doe" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, totam!" />
                    <UserComment userName="Jane Doe" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, totam!" />

                </ul>
            </div>
        </>
    )
}
