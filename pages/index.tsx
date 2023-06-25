import type { NextPage } from "next";
import Link from "next/link";
import { useMember, useBarstatus, useEvents, useMatelight } from "../api";
import { Card, CardTitle } from "../components/card";

const Home: NextPage = () => {
  const { member } = useMember();
  const { status } = useBarstatus();
  const { events } = useEvents();
  const { matelight } = useMatelight();
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridGap: "12px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
        }}
      >
        <Link href="/member">
          <Card>
            <CardTitle>Member</CardTitle>
            {member?.slice(0, 5).map((m: any) => (
              <div key={m.username}>
                {m.username} ({m.online_percentage})
              </div>
            ))}
            {member?.length > 5 && <div>{member.length - 5} more...</div>}
          </Card>
        </Link>
        <Link href="/events">
          <Card>
            <CardTitle>Events Today</CardTitle>
            {events?.map((event: any) => (
              <>
                <div>{event.title}</div>
                <div>
                  {event.start} - {event.end}
                </div>
              </>
            ))}
          </Card>
        </Link>
        <Link href="/matelight">
          <Card variant={matelight?.video ? "on" : "off"}>
            <CardTitle>Matelight</CardTitle>
            {matelight?.video || "nothing"} playing
          </Card>
        </Link>
        <Card variant={status ? "on" : "off"}>
          <CardTitle>Bar</CardTitle>
          {status ? "open" : "closed"}
        </Card>
      </div>
    </div>
  );
};

export default Home;
