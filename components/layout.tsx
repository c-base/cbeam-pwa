import { styled } from "@stitches/react";
import { AppBar } from "./appBar";
import {
  FaBeer,
  FaBraille,
  FaCalendar,
  FaChevronLeft,
  FaUserFriends,
} from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useBarstatus, useMatelight } from "../api";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { status } = useBarstatus();
  const { matelight } = useMatelight();
  const barColor = status ? "rgb(76, 195, 138)" : "rgb(255, 139, 62)";
  const matelightColor = matelight?.video
    ? "rgb(76, 195, 138)"
    : "rgb(255, 139, 62)";

  return (
    <>
      <AppBar>
        <Link href="/">
          <Title>
            {router.pathname === "/" ? null : <FaChevronLeft />}c-beam
          </Title>
        </Link>
        <Actions>
          <Link href="/member">
            <FaUserFriends />
          </Link>
          <Link href="/events">
            <FaCalendar />
          </Link>
          <Link href="/matelight">
            <FaBraille color={matelightColor} />
          </Link>
          <Link href="#">
            <FaBeer color={barColor} />
          </Link>
        </Actions>
      </AppBar>
      <Main>{children}</Main>
    </>
  );
};

const Title = styled("span", {
  flex: 1,
  fontFamily: "lucida console,andale mono,courier new,monospace",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
});

const Main = styled("main", {
  padding: "12px",
});

const Actions = styled("div", {
  display: "flex",
  justifyItems: "center",
  gap: "8px",
});
