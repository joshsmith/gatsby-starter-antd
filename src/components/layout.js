import React from 'react'
import { Layout as AntLayout } from 'antd'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAltSmile } from '@fortawesome/pro-solid-svg-icons'
import {
  faBalanceScaleLeft,
  faBolt,
  faClipboardListCheck,
  faCommentAltLines,
  faEnvelopeOpen,
  faFilter,
  faHeadphones,
  faMailBulk,
  faPenFancy,
  faStore,
  faTasks,
  faThumbsUp,
  faChartLine,
  faUsersClass,
  faPlug,
  faMagic,
  faBezierCurve,
  faCloudUpload,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faGithub,
  faPaypal,
  faPython,
  faStripe,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBalanceScaleLeft,
  faBolt,
  faClipboardListCheck,
  faCommentAltLines,
  faCommentAltSmile,
  faEnvelopeOpen,
  faFilter,
  faHeadphones,
  faMailBulk,
  faPenFancy,
  faStore,
  faTasks,
  faThumbsUp,
  faPaypal,
  faPython,
  faChartLine,
  faUsersClass,
  faPlug,
  faMagic,
  faBezierCurve,
  faCloudUpload,
  faGithub,
  faStripe
)

export default ({ children }) => (
  <AntLayout className="layout" style={{ background: '#fff' }}>
    {children}
  </AntLayout>
)
