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

    </Widget>
  )
}

export default Charts
