import requestIp from "request-ip";
import { NextApiRequest, NextApiResponse } from "next";
import { AsyncResource } from "async_hooks";

type Data = {
  ip: string | null;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  const ip = requestIp.getClientIp(req);

  console.log(ip);
  res.status(200).json({ ip: ip || "IP not found" });
}
