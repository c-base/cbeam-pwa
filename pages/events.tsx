import type { NextPage } from "next";
import Link from "next/link";
import { useEvents } from "../api";
import { Card } from "../components/card";

const Home: NextPage = () => {
  const { events } = useEvents();
  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      <Link href="/">
      <Card>
          <div>Events Today</div>
          {events?.map((event: any) => (
            <>
              <div>{event.title}</div>
              <div>{event.start} - {event.end}</div>
              <div>{event.description}</div>
            </>
          ))}
        </Card>
      </Link>
    </div>
  );
};

export default Home;
