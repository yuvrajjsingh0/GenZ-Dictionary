import Link from 'next/link';
import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Header = () => {
    //const discordMessages = Math.ceil(Math.random()*10);
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">GenZ Dictionary</a>
            </div>
            <div className="flex-none">
                <Link href={"https://discord.gg/E7vZarD8j8"} target='_blank'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mx-4">
                        <div className="indicator">
                            <FaDiscord size={"2em"}/>
                            <span className="badge badge-sm indicator-item">8+</span>
                        </div>
                    </div>
                </Link>
                
                <Link href={"https://x.com/its_yuvrajsingh"} target='_blank'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mx-4 ">
                        <FaXTwitter size={"2em"}/>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
