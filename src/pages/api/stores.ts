import { StoreApiResponse, StoreType } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse>
) {
  const { page = "1" }:{page?:string} = req.query;
  const prisma = new PrismaClient();
  const count = await prisma.store.count();
  const skipPage = parseInt(page) - 1;
  const stores = await prisma.store.findMany({
    orderBy: { id: "asc" },
    take: 10,  
    skip : skipPage * 10
  }); // findMany 메서드를 통해 모든 record를 가져옴
    
  res.status(200).json({
    page: parseInt(page),
    data: stores,
    totalCount: count,
    totalPage : Math.ceil(count / 10),
    });
}