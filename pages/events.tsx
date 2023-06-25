import type { NextPage } from "next";
import Link from "next/link";
import { useEvents } from "../api";
import { Card, CardTitle } from "../components/card";

const Home: NextPage = () => {
  const { events } = useEvents();
  return (
    <div>
      <Link href="/">
        <Card>
          <CardTitle>Events Today</CardTitle>
          {events?.map((event: any) => (
            <>
              <div>{event.title}</div>
              <div>
                {event.start} - {event.end}
              </div>
              <div>{event.description}</div>
            </>
          ))}
        </Card>
      </Link>
    </div>
  );
};

export default Home;
