import React, { useEffect, useState } from 'react';
import { getMatelightVideos, playMatelightVideo, getMathelightImgUrl, stopMatelightVideo } from '../api';

function Matelight() {
  const [ videos, setVideos ] = useState([])
  useEffect(() => {
      getMatelightVideos().then(setVideos)
  }, []);
  return (
    <div>
    <div className="row">
      <div className="col-md-12">
        <h1 align="center">Matelight</h1>
      </div>
    </div>
    <div className="row">
      {
        videos.map(video =>
          <div className="col-md-4">
            <div onClick={() => playMatelightVideo(video)}
              className="video"
              >
            <div
              className="preview"
              style={{
                "backgroundImage": `url('${getMathelightImgUrl(video.thumbnailName)}')`
              }}/>
              {video.title}
            </div>
          </div>
        )
      }
          <div className="col-md-4">
            <div onClick={() => stopMatelightVideo()}
              className="video"
              >
            <div
              className="preview"
              />
              STOP
            </div>
          </div>
    </div>
  </div>

  )
}

export default Matelight;