// assets
// import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   ChromeOutlined,
//   QuestionOutlined
// };

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: ' ',
  title: '  ',
  type: 'group',
  children: [
    // {
    //   id: 'sample-page',
    //   title: <p style={{ color: 'white', fontWeight: '200' }}>Sample Page</p>,
    //   type: 'item',
    //   url: '/sample-page'
    //   // icon: icons.ChromeOutlined
    // },
    {
      id: 'ask',
      title: <p style={{ color: 'white', fontWeight: '200' }}>Ask</p>,
      type: 'item',
      url: '/Ask'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'login',
      title: <p style={{ color: 'white', fontWeight: '200' }}>Login</p>,
      type: 'item',
      url: '/LoginPage'
      // icon: icons.ChromeOutlined
    },
    {
      id: ' ',
      title: '',
      type: 'item',
      url: ' '
      // icon: icons.ChromeOutlined
    }
    // {
    //   id: 'setting',
    //   title: <p style={{ color: 'white', fontWeight: '200' }}>Setting</p>,
    //   type: 'item',
    //   url: '/Ask'
    //   // icon: icons.ChromeOutlined
    // }
  ]
};

export default support;
