import React, { useState } from 'react'
import { WidthProvider, Responsive, Layouts, Layout } from 'react-grid-layout'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './dashboard.css'

import { AlphaStream, Tasks, Charts, Watchlist } from 'widgets'
import SettingPane from './SettingPane'

const ResponsiveReactGridLayout = WidthProvider(Responsive)
const defaultLayout = {
  xl: [
    { w: 1, h: 1, x: 0, y: 0, i: 'alphastream0', moved: false, static: false },
    { w: 1, h: 1, x: 0, y: 1, i: 'alphastream1', moved: false, static: false },
    { w: 2, h: 1, x: 1, y: 0, i: 'tasks', moved: false, static: false },
    { w: 2, h: 1, x: 1, y: 1, i: 'charts', moved: false, static: false },
    { w: 1, h: 2, x: 3, y: 0, i: 'watchlist', moved: false, static: false }
  ],
  lg: [
    { w: 1, h: 1, x: 0, y: 0, i: 'alphastream0', moved: false, static: false },
    { w: 1, h: 1, x: 0, y: 1, i: 'alphastream1', moved: false, static: false },
    { w: 2, h: 2, x: 1, y: 0, i: 'tasks', moved: false, static: false },
    { w: 2, h: 2, x: 1, y: 2, i: 'charts', moved: false, static: false },
    { w: 1, h: 2, x: 0, y: 2, i: 'watchlist', moved: false, static: false }
  ],
  md: [
    { w: 1, h: 1, x: 0, y: 0, i: 'alphastream0', moved: false, static: false },
    { w: 1, h: 1, x: 0, y: 1, i: 'alphastream1', moved: false, static: false },
    { w: 2, h: 2, x: 1, y: 0, i: 'tasks', moved: false, static: false },
    { w: 2, h: 2, x: 1, y: 2, i: 'charts', moved: false, static: false },
    { w: 1, h: 2, x: 0, y: 2, i: 'watchlist', moved: false, static: false }
  ],
  sm: [
    { w: 1, h: 1, x: 0, y: 0, i: 'alphastream0', moved: false, static: false },
    { w: 1, h: 1, x: 0, y: 1, i: 'alphastream1', moved: false, static: false },
    { w: 2, h: 1, x: 0, y: 2, i: 'tasks', moved: false, static: false },
    { w: 2, h: 1, x: 0, y: 3, i: 'charts', moved: false, static: false },
    { w: 1, h: 2, x: 1, y: 0, i: 'watchlist', moved: false, static: false }
  ],
  xs: [
    { w: 1, h: 1, x: 0, y: 0, i: 'alphastream0', moved: false, static: false },
    { w: 1, h: 1, x: 0, y: 1, i: 'alphastream1', moved: false, static: false },
    { w: 1, h: 2, x: 0, y: 2, i: 'tasks', moved: false, static: false },
    { w: 1, h: 2, x: 0, y: 4, i: 'charts', moved: false, static: false },
    { w: 1, h: 2, x: 0, y: 6, i: 'watchlist', moved: false, static: false }
  ]
}

function getLayoutFromLocalStorage(): Layouts {
  let ls: Layouts = {}
  if (localStorage) {
    try {
      ls =
        JSON.parse(
          localStorage.getItem('dashboard-layout') ??
          JSON.stringify(defaultLayout)
        ) || defaultLayout
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls
}

function saveToLocalStorage(key: string, value: Layouts) {
  if (localStorage) {
    localStorage.setItem('dashboard-layout', JSON.stringify(value))
  }
}

const Dashboard = (): React.ReactElement => {
  const [layouts, setLayouts] = useState<Layouts>(getLayoutFromLocalStorage())

  const resetLayout = () => {
    setLayouts({})
  }

  const onLayoutChange = (currentLayout: Layout[], allLayouts: Layouts) => {
    setLayouts(allLayouts)
    saveToLocalStorage(`layoutinfo`, allLayouts)
  }

  return (
    <div className="min-h-screen">
      <div className='h-10'>

      </div>
      <SettingPane onReset={resetLayout} />
      <ResponsiveReactGridLayout
        draggableHandle=".draggableHandle"
        layouts={layouts}
        breakpoints={{ xl: 1900, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ xl: 4, lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={(window.innerHeight - 130) / 2}
        margin={[10, 10]}
        maxRows={2}
        onLayoutChange={onLayoutChange}
        // compactType={'horizontal'}
        verticalCompact={true}
        isDraggable={true}
        isResizable={false}
        useCSSTransforms={false}
      >
        <div key="alphastream0" data-grid={layouts[0]}>
          <AlphaStream tabIndex="1" />
        </div>
        <div key="alphastream1" data-grid={layouts[1]}>
          <AlphaStream tabIndex="0" />
        </div>
        <div key="tasks" data-grid={layouts[2]}>
          <Tasks />
        </div>
        <div key="charts" data-grid={layouts[3]}>
          <Charts />
        </div>
        <div key="watchlist" data-grid={layouts[4]}>
          <Watchlist />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  )
}

export default Dashboard
