import React from "react";

function Star({
    value, color, handleHover, handleHoverLeave, handleClick, isFilled
}) {
    if (!handleHover) {
        return (
            <span
                className="Star"
                style={{ color }}
                onMouseEnter={() => console.log("Hover In")}
                onMouseLeave={() => console.log("Hover Out")}
                onClick={() => alert("Clicked a Star")}
            >
                { isFilled ? "★" : "☆" }
            </span>
        );
    }
    return (
        <span
            className="Star"
            style={{ color }}
            onMouseEnter={() => handleHover(value)}
            onMouseLeave={() => handleHoverLeave(value)}
            onClick={() => handleClick(value)}
        >
            {isFilled ? "★" : "☆"}
        </span>
    );
}
export default Star; // export the star class/funtion so that it is visible to others