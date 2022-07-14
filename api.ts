import useSWR from "swr";

// const CBEAM_REST_URL = "/api";
const CBEAM_REST_URL = "https://c-beam.cbrp3.c-base.org/api";
const CBEAM_RPC_REST_URL = "http://c-flo.cbrp3.c-base.org/rpc";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const rpcGet = (method: string) =>
  fetcher(`${CBEAM_RPC_REST_URL}/${method}`).then((data) => data.result);

export function useMember() {
  const { data, error } = useSWR(
    `${CBEAM_REST_URL}/member`,
    fetcher
  );

  return {
    member: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBarstatus() {
  const { data, error } = useSWR(`get_barstatus`, rpcGet);

  return {
    status: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useEvents() {
  const { data, error } = useSWR(
    `${CBEAM_REST_URL}/events`,
    fetcher
  );

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  };
}
