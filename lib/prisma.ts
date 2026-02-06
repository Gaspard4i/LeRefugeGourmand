import * as PrismaPkg from '@prisma/client';

// Defensive extraction of PrismaClient for different package exports
const PrismaClientClass: any = (PrismaPkg as any).PrismaClient ?? (PrismaPkg as any).default ?? (PrismaPkg as any);

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClientClass> | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClientClass({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
