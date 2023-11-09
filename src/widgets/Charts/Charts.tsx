import { Widget } from 'components'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Charts = () => {
  return (
    <Widget
      title={`Charts`}
      bannerLeft={<BannerLeft />}
      bannerRight={<BannerRight />}
    >
      123
    </Widget>
  )
}

export default Charts
