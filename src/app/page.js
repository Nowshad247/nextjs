import { getServerSession } from "next-auth";
import HomeBanner from "./components/HomeBanner";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {JSON.stringify(session)}
      <HomeBanner />
    </div>
  );
}
