export const MealVideo = ({ url }: { url: string }) => (
    <div>
      <iframe
        className="w-full max-w-lg aspect-video rounded-md"
        src={url
          .replace("watch?v=", "embed/")
          .replace("youtube.com", "youtube-nocookie.com")}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );