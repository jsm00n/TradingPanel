import { Widget } from 'components'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'
import TradingViewWidget from './TradingViewWidget'

const Charts = () => {
  return (
    <Widget
      title={`Charts`}
      setting={false}
      bannerLeft={<BannerLeft />}
      bannerRight={<BannerRight />}
    >
      <div className="w-full h-full">
        <TradingViewWidget></TradingViewWidget>
      </div>
    </Widget>
  )
}

export default Charts
