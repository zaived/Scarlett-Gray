import Image from "next/image";

export default function ExpressionGrid({ expression }) {
  // const {} = expression.fields;

  console.log(expression);

  return (
    <div className="card">
      <Image
        src={"https:" + expression.fields.file.url}
        width={200}
        height={200}
      />
    </div>
  );
}
