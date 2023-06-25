import type { NextPage } from "next";
import Link from "next/link";
import { useMember } from "../api";
import { Card, CardTitle } from "../components/card";

const Home: NextPage = () => {
  const { member } = useMember();
  return (
    <div>
      <Link href="/">
        <Card>
          <CardTitle>Member</CardTitle>
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
