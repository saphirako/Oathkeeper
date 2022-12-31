import React from "react";
import SiteSection from "../components/SiteSection";

export default function Home() {
    return (
        <>
            <SiteSection
                title="Cards"
                description="Looking for a particular denizen card? Want a closer look at that site? Curious about how an edifice will change for next game?"
                cta="Search"
                backgroundImg="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80"
                page="/cards"
            />
            {/* <SiteSection name="Rules" /> */}
            {/* <SiteSection name="Chronicle" /> */}
        </>
    );
}
