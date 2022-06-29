import type { NextPage } from 'next'
import { Connector, useMqttState, useSubscription } from 'mqtt-react-hooks';

function Status() {
  const { connectionStatus } = useMqttState();
  return <h1>{`Status: ${connectionStatus}`}</h1>;
}

function Subscription() {
  const s = useSubscription([
    'megablast/current_song',
    'c-base/crew',
    'bar/state',
  ]);

  const message = s.message

  console.log('s', s);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{`topic:${message?.topic} - message: ${message?.message}`}</span>
      </div>
      m: <pre>{JSON.stringify(message, null, 2)}</pre>
    </>
  );
}

const Home: NextPage = () => {
  return (
    <Connector brokerUrl="ws://c-beam.cbrp3.c-base.org:1882">
      <Status />
      <Subscription />
    </Connector>
  )
}

export default Home
