import React from 'react'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import TripSheetCreationFG from './Pages/TripSheetCreation/TripSheetCreationFG'
import TripSheetCreationHome from './Pages/TripSheetCreation/TripSheetCreationHome'
import TripSheetCreationSTO from './Pages/TripSheetCreation/TripSheetCreationSTO'
import TripSheetSettleMentFG from './Pages/TripSheetSettleMent/TripSheetSettleMentFG'
import TripSheetSettleMentHome from './Pages/TripSheetSettleMent/TripSheetSettleMentHome'
import TripSheetSettleMentSTO from './Pages/TripSheetSettleMent/TripSheetSettleMentSTO'
import VendorCreationApproval from './Pages/VendorCreationApproval/VendorCreationApproval'
import VendorCreationApprovalHome from './Pages/VendorCreationApproval/VendorCreationApprovalHome'
import VendorCreationConfrimation from './Pages/VendorCreationConfrimation/VendorCreationConfrimation'
import VendorCreationConfrimationHome from './Pages/VendorCreationConfrimation/VendorCreationConfrimationHome'
import VendorCreationHome from './Pages/VendorCreationRequest/VendorCreationHome'
import VendorCreationRequest from './Pages/VendorCreationRequest/VendorCreationRequest'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  {
    path: '/VendorCreationHome',
    exact: true,
    name: 'VendorCreationHome',
    component: VendorCreationHome,
  },
  {
    path: '/VendorCreationHome/VendorCreationRequest',
    exact: true,
    name: 'VendorCreationRequest',
    component: VendorCreationRequest,
  },
  {
    path: '/VendorCreationApprovalHome',
    exact: true,
    name: 'VendorCreationApprovalHome',
    component: VendorCreationApprovalHome,
  },
  {
    path: '/VendorCreationApprovalHome/VendorCreationApproval',
    exact: true,
    name: 'VendorCreationApprovalHome',
    component: VendorCreationApproval,
  },
  {
    path: '/VendorCreationConfrimationHome',
    exact: true,
    name: 'VendorCreationConfrimationHome',
    component: VendorCreationConfrimationHome,
  },
  {
    path: '/VendorCreationConfrimationHome/VendorCreationConfrimation',
    exact: true,
    name: 'VendorCreationConfrimation',
    component: VendorCreationConfrimation,
  },
  {
    path: '/TripSheetCreationHome',
    exact: true,
    name: 'TripSheetCreationHome',
    component: TripSheetCreationHome,
  },
  {
    path: '/TripSheetCreationHome/TripSheetCreationFG',
    exact: true,
    name: 'TripSheetCreationFG',
    component: TripSheetCreationFG,
  },
  {
    path: '/TripSheetCreationHome/TripSheetCreationSTO',
    exact: true,
    name: 'TripSheetCreationFG',
    component: TripSheetCreationSTO,
  },
  {
    path: '/TripSheetSettleMentHome',
    exact: true,
    name: 'TripSheetSettleMentHome',
    component: TripSheetSettleMentHome,
  },
  {
    path: '/TripSheetSettleMentHome/TripSheetSettleMentFG',
    exact: true,
    name: 'TripSheetSettleMentFG',
    component: TripSheetSettleMentFG,
  },
  {
    path: '/TripSheetSettleMentHome/TripSheetSettleMentSTO',
    exact: true,
    name: 'TripSheetSettleMentSTO',
    component: TripSheetSettleMentSTO,
  },
]

export default routes
