const CBEAM_RPC_REST_URL = "http://c-flo.cbrp3.c-base.org/rpc";

const jsonFetch = url => fetch(url).then(data => data.json());

const rpcGet = method =>
  jsonFetch(`${CBEAM_RPC_REST_URL}/${method}`).then(data => data.result);

export const getUsers = () => rpcGet("available");

export const getBarstatus = () => rpcGet("get_barstatus");

export const cbeamPing = () => rpcGet("fnord")