import React, { useMemo, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { PoolInfo } from "global";

const query = gql`
query {
    pools {
        id
        token0 {
          id
          name
          symbol
        }
        token1 {
          id
          name
          symbol
        }
        volumeUSD
        feeTier
        token1Price
        token0Price
    }
  }
`;

type WagmiResponse =
    | (
        | {
            error: Error;
            result?: any;
            status: "failure";
        }
        | {
            error?: undefined;
            result: any;
            status: "success";
        }
    )[]
    | undefined;

type Response = {
    data: WagmiResponse;
    isSuccess: boolean;
};

const usePools = () => {
    const [poolsFromSG, setPoolsFromSG] = useState<PoolInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const { loading: queryLoading, data: queryData } = useQuery(query, {
        pollInterval: 5000,
    });

    useEffect(() => {
        if (queryLoading) return;
        if (!queryData) return;

        let poolInfos: PoolInfo[] = [];

        for (var i = 0; i < queryData.pools.length; i++) {
            let pool = queryData.pools[i];
            poolInfos.push({
                id: pool.id,
                token0Id: pool.token0.id,
                token0Name: pool.token0.name,
                token0Symbol: pool.token0.symbol,
                token0Balance: 0,
                token1Id: pool.token1.id,
                token1Name: pool.token1.name,
                token1Balance: 0,
                token1Symbol: pool.token1.symbol,
                volumeUSD: pool.volumeUSD,
                feeTier: pool.feeTier,
                token0Price: pool.token0Price,
                token1Price: pool.token1Price,
            })
        }

        setPoolsFromSG(poolInfos);
        setLoading(false);
    }, [queryLoading, queryData]);

    return { loading, poolsFromSG };
};

export default usePools;
