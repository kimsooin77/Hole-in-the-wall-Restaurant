import { StoreType } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>
) {
    const prisma = new PrismaClient();
    const stores = await prisma.store.findMany(); // findMany 메서드를 통해 모든 record를 가져옴
    
    res.status(200).json(stores);
}