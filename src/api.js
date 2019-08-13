const CBEAM_RPC_REST_URL = "http://c-flo.cbrp3.c-base.org/rpc";
const MATELIGHT_URL = "http://matelight.cbrp3.c-base.org/api";
const MATELIGHT_IMAGE_URL = "http://matelight.cbrp3.c-base.org/assets/thumbs"

const jsonFetch = url => fetch(url).then(data => data.json());
const jsonPost = (url, data = {}) => fetch(url, {method: 'POST', body: JSON.stringify(data)}).then(data => data.json());

export const getMatelightStatus = () => jsonFetch(`${MATELIGHT_URL}/getstatus`);

export const getMatelightVideos = () => jsonFetch(`${MATELIGHT_URL}/getvideos`);

export const stopMatelightVideo = () => jsonFetch(`${MATELIGHT_URL}/stop`);

export const playMatelightVideo = video => jsonFetch(`${MATELIGHT_URL}/play/${video.title}`);

export const getMathelightImgUrl = video => `${MATELIGHT_IMAGE_URL}/${video}`;

const rpcGet = method =>
  jsonFetch(`${CBEAM_RPC_REST_URL}/${method}`).then(data => data.result);

export const getUsers = () => rpcGet("available");

export const getBarstatus = () => rpcGet("get_barstatus");

export const cbeamPing = () => rpcGet("fnord");
