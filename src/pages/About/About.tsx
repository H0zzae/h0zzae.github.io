import React from "react";

type AboutProps = {
    title: string;
}
const About = ({title}:AboutProps) => {
    return (
        <div>
            <div>{title}</div>
        </div>
    )
};
export default About;