import React from "react";

type ProjectProps = {
    title?: string;
}
const Project = ({title}:ProjectProps) => {
    return (
        <div>ppp</div>
    )
};
Project.defaultProps = {
    title : "hhhdefault"
}
export default Project;