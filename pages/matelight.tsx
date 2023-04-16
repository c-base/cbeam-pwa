import type { NextPage } from "next";
import Link from "next/link";
import {
  useMatelight,
  useMatelightVideos,
  getMathelightImgUrl,
  playMatelightVideo,
} from "../api";
import { Card, CardTitle } from "../components/card";
import { Preview, Video } from "../components/matelightVideo";

const Home: NextPage = () => {
  const { matelight } = useMatelight();
  const { videos } = useMatelightVideos();
  const currentVideo = videos?.find((video) => video.title === matelight.video);
  console.log({ currentVideo, matelight, videos });
  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      <Link href="/">
        <Card>
          <CardTitle>Matelight</CardTitle>
          {currentVideo ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Video>
                <Preview
                  playing
                  css={{
                    backgroundImage: `url('${getMathelightImgUrl(
                      currentVideo
                    )}')`,
                  }}
                ></Preview>
                playing {currentVideo.title}
              </Video>
            </div>
          ) : null}
          <hr/>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              justifyItems: "center",
            }}
          >
            {videos?.map((video) => (
              <Video
                key={video.title}
                onClick={(e) => {
                  playMatelightVideo(video);
                  e.preventDefault();
                }}
              >
                <Preview
                  css={{
                    backgroundImage: `url('${getMathelightImgUrl(video)}')`,
                  }}
                ></Preview>
                {video.title}
              </Video>
            ))}
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Home;
