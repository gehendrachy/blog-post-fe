import React from "react";

export const UserComment = ({comment, userName}) => {
    return (
        <>
            <li className="list-group-item">
                <p>{comment}</p>
                <small className="float-end">{userName}</small>
            </li>
        </>
    );
};
