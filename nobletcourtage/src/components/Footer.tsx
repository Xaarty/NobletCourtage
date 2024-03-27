import * as prismic from"@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";


export default async function Footer() {
    const client = prismic.createClient("Noblet-Courtage");
    const settings = await client.getSingle("settings")

    return (
        <Bounded as="footer" className="mt-4 py-0 bg-gradient-to-t from-slate-200 to-white">
            <div className="border-1 border-black"></div>           
            <div className="grid grid-cols-footer pt-sm pb-1">
                <div className="grid gap-2">
                    <Link href="/"><Logo /></Link>
                    <p className="text-sm font-medium">mnoblet.merevia@gmail.com</p>
                    <p className="text-sm font-medium">07 62 90 58 21</p>
                </div>
                <nav className="grid content-center">
                    <ul className="grid grid-cols-cols3auto content-center justify-end gap-6 mini:grid-rows-3 mini:grid-cols-1 mini:gap-0 mini:">
                        {settings.data.social_network.map(({social_image, social_network_name, link}) => (
                            <li key= {social_network_name}>
                                <PrismicNextLink field={link} className="text-sm grid mini:grid-cols-cols2auto mini:justify-end mini:content-center mini:gap-2"><PrismicNextImage field={social_image} className="w-8 h-8 m-auto object-cover"/> <p className="grid content-center">{social_network_name}</p></PrismicNextLink>
                            </li>
                        ))}
                    </ul>        
                </nav>
            </div>
        </Bounded>
    );
}