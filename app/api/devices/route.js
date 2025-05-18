import { connectToDb } from "@/utils/database";
import Devices from "@/models/devices";

export const GET = async (req) => {
  try {
    await connectToDb();

    const url = new URL(req.url);
    const sendToFilter = url.searchParams.get("send_to");

    const query = sendToFilter ? { send_to: sendToFilter } : {};
    const devices = await Devices.find(query);

    return new Response(JSON.stringify(devices), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
