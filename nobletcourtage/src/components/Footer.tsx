import * as prismic from"@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = prismic.createClient("Noblet-Courtage");
    const settings = await client.getSingle("settings")

    return (
        <footer>
            <Link href="/">{settings.data.site_title}</Link>
        <nav>
            <ul>
                {settings.data.navigation.map(({link, label}) => (
                    <li key= {label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>        
        </nav>
        </footer>
    );
}