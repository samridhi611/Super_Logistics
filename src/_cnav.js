import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle,
  cilSpeedometer,
  cilAddressBook
} from '@coreui/icons' 
import { CNavGroup, CNavItem } from '@coreui/react' //CNavTitle

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Employees',
    to: '/company-admin/employees',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Employees',
        to: '/company-admin/employees/all-employees',
      },
      {
        component: CNavItem,
        name: 'Add New Employees',
        to: '/company-admin/employees/add-new-employees',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Surveys',
    to: '/company-admin/surveys',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Surveys',
        to: '/company-admin/surveys/all-surveys',
      },
      {
        component: CNavItem,
        name: 'Create Survey',
        to: '/company-admin/surveys/add-new-surveys',
      },
    ],
  },
 
]

export default _nav
