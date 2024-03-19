import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import * as prismic from"@prismicio/client";
// import { components } from "@/slices";

export default async function Page() {
  const client = prismic.createClient("Noblet-Courtage");
  const page = await client.getSingle("homepage");

  return <div>Works</div>

  // return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = prismic.createClient("Noblet-Courtage");
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
