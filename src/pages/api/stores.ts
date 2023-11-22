import { StoreApiResponse, StoreType } from "@/interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse | StoreType[] | StoreType>
) {
  const { page = "" }: { page?: string } = req.query;
  const prisma = new PrismaClient();

  if (page) {
    const count = await prisma.store.count();
    const skipPage = parseInt(page) - 1;
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
      take: 10,
      skip: skipPage * 10,
    }); // findMany 메서드를 통해 모든 record를 가져옴

    res.status(200).json({
      page: parseInt(page),
      data: stores,
      totalCount: count,
      totalPage: Math.ceil(count / 10),
    });
  } else {
    const { id }: { id?: string } = req.query;
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
      where: {
        // 쿼리를 날릴 때 id가 있으면 id가 같은 데이터를 가져오고 없다면 where문을 무시할 수 있도록 빈 옵션 전달
        id: id ? parseInt(id) : {},
      },
    });

    return res.status(200).json(id ? stores[0] : stores);
  }
}
