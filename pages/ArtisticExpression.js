import { createClient } from "contentful";
import VideoExpressionGrid from "../comp/VideoExpressionGrid";
import ExpressionGrid from "../comp/ExpressionGrid";

export async function getStaticProps() {
  //Interacts with contentful to grab data we need
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  //Function we use to get items from content space
  //Declaring the "content_type: " we want to grab
  const res = await client.getEntries({ content_type: "expression" });

  //returning an object inside getStaticProps
  //return it as a prop to pass down
  return {
    props: { expressions: res.items },
    revalidate: 1,
  };
}

export default function ArtisticExpression({ expressions }) {
  console.log(expressions);
  return (
    <div>
      <div className="expression-videos">
        <VideoExpressionGrid />
      </div>
      <div className="expression-gallery">
        {expressions[0].fields.featuredwork.map((expression) => (
          <ExpressionGrid key={expression.sys.id} expression={expression} />
        ))}
      </div>
    </div>
  );
}
