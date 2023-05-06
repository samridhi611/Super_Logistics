import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import nav from '../_nav'
import cnav from '../_cnav'

const AppSidebar = ({userRole}) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.nav.sidebarShow)

  const navigation = userRole === 'admin' ? cnav : nav;

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h4 style={{marginTop:'9px',letterSpacing:'2px',fontWeight:'lighter'}}>Super Logistics</h4>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

AppSidebar.propTypes = {
  userRole: PropTypes.oneOf(['admin', 'superadmin']).isRequired,
};

export default React.memo(AppSidebar)
