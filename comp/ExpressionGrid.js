import Image from "next/image";

export default function ExpressionGrid({ expression }) {
  const { featuredwork } = expression.fields;
  return (
    <div className="card">
      <Image
        src={"https:" + featuredwork.fields.file.url}
        width={featuredwork.fields.file.details.image.width}
        height={featuredwork.fields.file.details.image.height}
      />
    </div>
  );
}
