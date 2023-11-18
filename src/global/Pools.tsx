type PoolInfo = {
    id: string;
    token0Id: string;
    token0Balance: number;
    token0Name: string;
    token0Symbol: string;
    token1Id: string;
    token1Name: string;
    token1Symbol: string;
    token1Balance: number;
    volumeUSD: number;
    feeTier: number;
    token0Price: number;
    token1Price: number;
};

export { type PoolInfo };
