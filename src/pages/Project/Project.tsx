import React from "react";

type ProjectProps = {
    title?: string;
}
const Project = ({title}:ProjectProps) => {
    return (
        <div>
            <div>{title}</div>
        </div>
    )
};
Project.defaultProps = {
    title : "hhhdefault"
}
export default Project;