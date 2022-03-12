import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Image from "next/image";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { motion } from "framer-motion";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "sProjects",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,

    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "sProjects",

    "fields.slug": params.slug,
  });

  return {
    props: { sProjects: items[0] },

    revalidate: 1,
  };
}
export default function ProjectDetails({ sProjects }) {
  const [toggler, setToggler] = useState(false);
  const { galleryContent, projectThumbnails, bodyText } = sProjects.fields;
  console.log(sProjects);
  return (
    <div className="p-gallery">
      <a onClick={() => setToggler(!toggler)}>
        <Image
          src={"https:" + projectThumbnails[0].fields.file.url}
          width={400}
          height={400}
        />
      </a>
      <FsLightbox
        toggler={toggler}
        sources={["https:" + galleryContent[2].fields.file.url]}
      />
      <div className="body-text">{documentToReactComponents(bodyText)}</div>
    </div>
  );
}
