import { Widget } from 'components'
import BannerRight from './BannerRight'
import WatchItem from './WatchItem'
import { usePools } from 'hooks'
import { PoolInfo } from 'global'

const Watchlist = () => {

  const { loading, poolsFromSG } = usePools();

  return (
    <Widget title={`Watchlist`} setting={false} bannerRight={<BannerRight />}>
      <div className="flex-row w-full h-full pl-2 pr-2 pb-2">
        {loading ? (
          <p className="flex w-full h-full text-white text-md items-center justify-center">
            Loading...
          </p>
        ) : (
          poolsFromSG.map((pool: PoolInfo, key) => {
            return <WatchItem key={key} pool={pool}></WatchItem>
          })
        )}
      </div>
    </Widget>
  )
}

export default Watchlist
