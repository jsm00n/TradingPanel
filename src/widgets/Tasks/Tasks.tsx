import { Widget } from 'components'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Tasks = () => {
  return (
    <Widget
      title={`Tasks`}
      bannerLeft={<BannerLeft />}
      bannerRight={<BannerRight />}
    >
      123
    </Widget>
  )
}

export default Tasks
