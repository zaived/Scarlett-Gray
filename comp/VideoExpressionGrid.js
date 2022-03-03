import ReactPlayer from "react-player";

export default function VideoExpressionGrid() {
  return (
    <div className="video-grid">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=lVJLNsLNnWs"
        width={640}
        height={360}
      />
    </div>
  );
}
