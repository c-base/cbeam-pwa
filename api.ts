import useSWR, { mutate } from "swr";

// const CBEAM_REST_URL = "/api";
const CBEAM_REST_URL = "https://c-beam.cbrp3.c-base.org/api";
const CBEAM_RPC_REST_URL = "http://c-flo.cbrp3.c-base.org/rpc";
const MATELIGHT_URL = "http://matelight.cbrp3.c-base.org/api";
const MATELIGHT_IMAGE_URL = "http://matelight.cbrp3.c-base.org/assets/thumbs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const rpcGet = (method: string) =>
  fetcher(`${CBEAM_RPC_REST_URL}/${method}`).then((data) => data.result);

export function useMember() {
  const { data, error } = useSWR(`${CBEAM_REST_URL}/member`, fetcher);

  return {
    member: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBarstatus() {
  const { data, error } = useSWR(`${CBEAM_REST_URL}/barstatus`, fetcher);

  return {
    status: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useEvents() {
  const { data, error } = useSWR(`${CBEAM_REST_URL}/events`, fetcher);

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  };
}

type MatelightVideo = {
  hasThumbnail: boolean;
  thumbnailName: string;
  title: string;
};

export const getMathelightImgUrl = (video: MatelightVideo) =>
  `${MATELIGHT_IMAGE_URL}/${video.thumbnailName}`;

export function useMatelight() {
  const { data, error } = useSWR(`${CBEAM_REST_URL}/matelight/status/`, fetcher);

  return {
    matelight: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useMatelightVideos() {
  const { data, error } = useSWR<MatelightVideo[]>(
    `${CBEAM_REST_URL}/matelight/`,
    fetcher
  );

  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const playMatelightVideo = async (video: MatelightVideo) => {
  await fetcher(`${CBEAM_REST_URL}/matelight/${video.title}/play/`);
  mutate(`${CBEAM_REST_URL}/matelight/status/`);
};
