import Image from "next/image";
import Link from "next/Link";

export default function ProjectCard({ sProjects }) {
  const { title, slug, thumbnail } = sProjects.fields;

  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="card-thumb">
          <Link href={"/projects/" + slug}>
            <a>
              <Image
                src={"https:" + thumbnail.fields.file.url}
                height={400}
                width={400}
              />
            </a>
          </Link>

          <div className="title">
            <Link href={"/projects/" + slug}>
              <a>{title}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
