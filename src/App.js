// project import
// import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
// import MainRoutes from 'routes/MainRoutes';
import ThemeRoutes from 'routes/index';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      {/* <Routes /> */}
      <ThemeRoutes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
