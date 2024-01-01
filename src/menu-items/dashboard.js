// assets
// import { DashboardOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   DashboardOutlined
// };

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: (
    <h1 style={{ color: 'white' }}>
      Hey👋,
      <br /> Hitanshu
    </h1>
  ),
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <p style={{ color: 'white', fontWeight: '200' }}>Dashboard</p>,
      type: 'item',
      url: '/dashboard/default',
      // icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
