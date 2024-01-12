// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import ThemeRoutes from 'routes/index';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <ThemeRoutes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
