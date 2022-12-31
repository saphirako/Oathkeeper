import React from "react";
import { useNavigate } from "react-router-dom";

interface ICTAButton {
    label: string;
    location?: string;
}

export default function CTAButton(props: ICTAButton) {
    const navigate = useNavigate();
    return (
        <div
            className="p-2 px-4 my-8 rounded-md w-max bg-blue-500 text-black font-semibold text-lg"
            onClick={() => (props.location ? navigate(props.location) : null)}
        >
            {props.label}
        </div>
    );
}
