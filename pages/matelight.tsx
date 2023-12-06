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
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { matelight } = useMatelight();
  const { videos } = useMatelightVideos();
  const currentVideo = videos?.find((video) => video.title === matelight?.video);
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      <Link href="/">
        <Card>
          <CardTitle>{t('matelight.title')}</CardTitle>
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
                {t('matleight.playing')} {currentVideo.title}
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
