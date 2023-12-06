import type { NextPage } from "next";
import Link from "next/link";
import { useMember, useBarstatus, useEvents, useMatelight } from "../api";
import { Card, CardTitle } from "../components/card";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { member } = useMember();
  const { status } = useBarstatus();
  const { events } = useEvents();
  const { matelight } = useMatelight();
  const { t } = useTranslation();

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
            <CardTitle>{t('member.title')}</CardTitle>
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
            <CardTitle>{t('events.title')}</CardTitle>
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
            <CardTitle>{t('matelight.title')}</CardTitle>
            {matelight?.video || t('matelight.nothing')} {t('matelight.playing')}
          </Card>
        </Link>
        <Card variant={status ? "on" : "off"}>
          <CardTitle>{t('bar.title')}</CardTitle>
          {status ? t('bar.open') : t('bar.closed')}
        </Card>
      </div>
    </div>
  );
};

export default Home;
