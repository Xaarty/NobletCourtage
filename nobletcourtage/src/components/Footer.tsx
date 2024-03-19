import * as prismic from"@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = prismic.createClient("Noblet-Courtage");
    const settings = await client.getSingle("settings")

    return (
        <footer>
        <div>
            <Link href="/">{settings.data.site_title}</Link>
            <div>
                <p>mnoblet.merevia@gmail.com</p>
                <p>07 62 90 58 21</p>
            </div>
        </div>
        <nav>
            <ul>
                {settings.data.social_network.map(({social_image, social_network_name, link}) => (
                    <li key= {social_network_name}>
                        <PrismicNextLink field={link}>[social_image || ""] {social_network_name}</PrismicNextLink>
                    </li>
                ))}
            </ul>        
        </nav>
        </footer>
    );
}