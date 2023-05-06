import React from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { cilOptions } from '@coreui/icons';
import CIcon from '@coreui/icons-react'


const MyDropdown = () => {
  return (
    <CDropdown alignment="end">
    <CDropdownToggle color="transparent" caret={false} className="p-0">
      <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
    </CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem>Action</CDropdownItem>
      <CDropdownItem>Another action</CDropdownItem>
      <CDropdownItem>Something else here...</CDropdownItem>
      <CDropdownItem disabled>Disabled action</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  )
}

export default MyDropdown