import type { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useEvents } from "../api";
import { Card, CardTitle } from "../components/card";

const Home: NextPage = () => {
  const { events } = useEvents();
  const { t } = useTranslation();
  return (
    <div>
      <Link href="/">
        <Card>
          <CardTitle>{t('events.title')}</CardTitle>
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
