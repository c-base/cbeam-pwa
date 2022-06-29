import type { NextPage } from "next";
import Link from "next/link";
import { useMember, useBarstatus, useEvents } from "../api";
import { Card } from "../components/card";

const Home: NextPage = () => {
  const { member } = useMember();
  const { status } = useBarstatus();
  const { events } = useEvents();
  return (
    <div
      style={{
        padding: "12px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridGap: "12px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )"
        }}
      >
        <Link href="/member">
          <Card>
            <div>Member</div>
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
            <div>Events Today</div>
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
        <Card variant={status ? "on" : "off"}>
          <div>Bar</div>
          {status ? "open" : "closed"}
        </Card>
      </div>
    </div>
  );
};

export default Home;
