import { Widget } from 'components'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'
import TaskItem from './TaskItem/TaskItem'

const Tasks = () => {
  return (
    <Widget
      title={`Tasks`}
      setting={false}
      bannerLeft={<BannerLeft />}
      bannerRight={<BannerRight />}
    >
      <div className="w-full pl-2 pr-2 pb-2 space-y-1">
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
      </div>
    </Widget>
  )
}

export default Tasks
