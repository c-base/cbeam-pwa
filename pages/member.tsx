import type { NextPage } from "next";
import Link from "next/link";
import { useMember } from "../api";
import { Card, CardTitle } from "../components/card";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { member } = useMember();
  const { t } = useTranslation();
  
  return (
    <div>
      <Link href="/">
        <Card>
          <CardTitle>{t('member.title')}</CardTitle>
          {member?.map((m: any) => (
            <div key={m.username}>
              {m.username} ({m.online_percentage})
            </div>
          ))}
        </Card>
      </Link>
    </div>
  );
};

export default Home;
