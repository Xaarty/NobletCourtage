import * as prismic from"@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link"
import Bounded from "../components/Bounded";
import Logo from "./Logo";

export default async function Header () {
    const client = prismic.createClient("Noblet-Courtage");
    const settings = await client.getSingle("settings")

    return (
        <Bounded as="header" className="py-sm">
            <header>
                <div>
                    <Link href="/" className=""><Logo/></Link>
                    <nav>
                        <ul>
                            {settings.data.navigation.map(({link, label}) => (
                                <li key= {label}>
                                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                                </li>
                            ))}
                        </ul>        
                    </nav>
                </div>
                <div></div>
            </header>
    </Bounded>
    );
}