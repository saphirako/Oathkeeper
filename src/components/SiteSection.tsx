import React from "react";
import CTAButton from "./CTAButton";

interface ISiteSection {
    backgroundImg: string;
    title: string;
    description: string;
    cta: string;
    page?: string;
}

export default function SiteSection(props: ISiteSection) {
    return (
        <div className="relative overflow-hidden">
            <img
                src={props.backgroundImg}
                className="absolute min-h-screen object-cover object-center overflow-x-hidden -z-10"
            />
            <div className="flex flex-col h-screen w-full p-12 justify-end text-white text-opacity-80 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold py-8">{props.title}</h1>
                <p>{props.description}</p>
                <CTAButton
                    label={props.cta}
                    location={props.page ? props.page : undefined}
                />
            </div>
        </div>
    );
}
