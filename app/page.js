import HomePage from "@/components/HomePage";
import axios from "axios";
export const dynamic = "force-dynamic";

export default async function Home() {
  const devices = (await axios.get(`${process.env.URL}/api/devices`)).data;
  return (
    <div className="">
      <HomePage devices={devices} />
    </div>
  );
}
