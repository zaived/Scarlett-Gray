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

    fallback: false,
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
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  const { galleryContent, projectThumbnails, bodyText } = sProjects.fields;
  console.log(sProjects);

  const gc = galleryContent.map((x) => "https:" + x.fields.file.url);
  return (
    <div className="p-gallery">
      <div className="body-text">{documentToReactComponents(bodyText)}</div>
      <div className="p-lightbox">
        <div className="lightbox-content">
          {projectThumbnails.map((pt, i) => {
            return (
              <a key={i} onClick={() => openLightboxOnSlide(i + 1)}>
                <Image
                  src={"https:" + pt.fields.file.url}
                  width={400}
                  height={400}
                />
              </a>
            );
          })}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={gc}
            slide={lightboxController.slide}
          />
        </div>
      </div>
    </div>
  );
}
