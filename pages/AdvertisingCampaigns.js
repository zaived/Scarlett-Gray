import { createClient } from "contentful";
import ProjectCard from "../comp/ProjectCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "sProjects" });

  return {
    props: { sProjects: res.items },
    revalidate: 1,
  };
}

export default function AdvertisingCampaigns({ sProjects }) {
  // console.log(sProjects);
  return (
    <div className="ad-wrapper">
      <div className="ad-cards">
        {sProjects.map((sProjects) => (
          <ProjectCard key={sProjects.sys.id} sProjects={sProjects} />
        ))}
      </div>
    </div>
  );
}
