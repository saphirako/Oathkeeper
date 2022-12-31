import React, { ImgHTMLAttributes } from "react";
import BackIconButton from "../components/BackIconButton";
import { useNavigate } from "react-router-dom";

export default function Cards() {
    let cardCollection = [];
    for (let i = 0; i < 20; i++) {
        cardCollection.push(<img src="#" key={"img" + i} />);
    }
    const navigate = useNavigate();

    return (
        <div>
            <div className="w-full p-4 flex justify-between">
                <BackIconButton action={navigate(-1)} />
            </div>
            {/* button to go back */}
            {/* Search bar / icon button thing */}
            {/* filter button */}
            {/* image gallery section */}
        </div>
    );
}
