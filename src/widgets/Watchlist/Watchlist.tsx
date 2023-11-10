import { Widget } from 'components'
import BannerRight from './BannerRight'
import WatchItem from './WachItem'

const Watchlist = () => {
  return (
    <Widget title={`Watchlist`} bannerRight={<BannerRight />}>
      <div className="w-full pl-2 pr-2 pb-2">
        <WatchItem></WatchItem>
        <WatchItem></WatchItem>
        <WatchItem></WatchItem>
        <WatchItem></WatchItem>
        <WatchItem></WatchItem>
        <WatchItem></WatchItem>
      </div>
    </Widget>
  )
}

export default Watchlist
