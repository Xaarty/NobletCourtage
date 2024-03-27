import * as prismic from"@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link"
import Bounded from "../components/Bounded";
import Logo from "./Logo";

export default async function Header () {
    const client = prismic.createClient("Noblet-Courtage");
    const settings = await client.getSingle("settings")

    return (
    <Bounded as="header" className="py-sm pb-4">
        <div className="grid grid-cols-cols2auto pb-4 gap-21%">
            <Link href="/" ><Logo/></Link>
            <nav className="grid">
                <ul className="grid grid-cols-cols3auto justify-around content-center">
                    {settings.data.navigation.map(({link, label}) => (
                        <li key= {label}>
                            <PrismicNextLink field={link} className="text-sm hover:underline hover:underline-offset-2">{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>        
            </nav>
        </div>
        <div className="border-1 border-black"></div>
    </Bounded>
    );
}