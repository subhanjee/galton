import React from 'react';

// material-ui
import { MenuItem, Select, Box, Grid, Stack, Typography } from '@mui/material';
import dashb from 'assets/images/dashb.png';

// project import
// import OrdersTable from './OrdersTable';
// import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
// import ReportAreaChart from './ReportAreaChart';
// import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
// import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
// import avatar1 from 'assets/images/users/avatar-1.png';
// import avatar2 from 'assets/images/users/avatar-2.png';
// import avatar3 from 'assets/images/users/avatar-3.png';
// import avatar4 from 'assets/images/users/avatar-4.png';

//category value Mn Sar
const months = [
  {
    month: 'Jan',
    value: '3.4'
  },
  {
    month: 'Feb',
    value: '3.4'
  },
  {
    month: 'Mar',
    value: '3.4'
  },
  {
    month: 'Apr',
    value: '3.4'
  },
  {
    month: 'May',
    value: '3.4'
  },
  {
    month: 'June',
    value: '3.4'
  },
  {
    month: 'July',
    value: '3.4'
  },
  {
    month: 'Aug',
    value: '3.4'
  },
  {
    month: 'Sep',
    value: '3.4'
  }
];

// avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// // sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [value, setValue] = useState('today');
  // const [slot] = useState('week');
  // const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}

      <Grid item xs={12} sm={6} md={6} lg={8}>
        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #CECECE', borderRadius: '1rem', padding: '1.2rem' }}>
          <p style={{ fontSize: '2rem' }}>Biscuits & Cakes (&lt;75G)</p>
          <p style={{ fontSize: '1rem', fontWeight: '700' }}>KPIs</p>
          <div style={{ background: '#EDFAFF', border: '1px solid #CECECE', borderRadius: '8px', padding: '1rem' }}>
            <h3>Category Value Mn SAR</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {months.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                  <div>
                    {' '}
                    <p>{item.month}</p>
                    <p style={{ fontWeight: '600' }}>{item.value}</p>{' '}
                  </div>
                  <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '1rem', background: '#FCFFD6', border: '1px solid #CECECE', borderRadius: '8px', padding: '1rem' }}>
            <h3>Category Volume in Tons</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {months.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                  <div>
                    {' '}
                    <p>{item.month}</p>
                    <p style={{ fontWeight: '600' }}>{item.value}</p>{' '}
                  </div>
                  <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div>
                </div>
              ))}
            </div>
          </div>

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <br />
              <Typography variant="h5">Income Overview</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}>
                <Typography variant="h6" color="textSecondary">
                  This Week Statistics
                </Typography>
                <Typography variant="h3">$7,650</Typography>
              </Stack>
            </Box>
            <MonthlyBarChart />
          </MainCard>
        </div>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>{/* <Typography variant="h5">Analytics Report</Typography> */}</Grid>
          <Grid item />
        </Grid>
        <MainCard style={{ padding: '1rem', width: '23rem', borderRadius: '1rem' }} content={false}>
          <div>
            <h3>Choose Category</h3>
            <Select
              value="biscuits_and_cakes"
              onChange={handleCategoryChange}
              style={{ width: '320px' }} // Adjust the width as needed
            >
              <MenuItem value="biscuits_and_cakes">Biscuits & Cakes (&lt;75G)</MenuItem>
              <MenuItem value="chocolate">Chocolate </MenuItem>
              <MenuItem value="candy ">Candy</MenuItem>
              <MenuItem value="powdered_bevarage">Powdered Beverage</MenuItem>
              <MenuItem value="grocery ">Grocery</MenuItem>
            </Select>
          </div>
        </MainCard>
        <MainCard sx={{ mt: 2 }} style={{ padding: '1rem', width: '23rem', height: '50rem', borderRadius: '1rem' }} content={false}>
          <div>
            <h2>Insights</h2>
            <h4>
              Competitor sales are up 3%
              <br /> overall whereas our sales are
              <br /> down 1.23% from last month.
            </h4>
            <img src={dashb} alt="Mantis" style={{ width: '22rem', opacity: 0.1, height: '538px', marginTop: '10rem', left: '928px' }} />
          </div>
        </MainCard>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      {/* <Grid item xs={12} md={7} lg={8}> */}
      {/* <Grid container alignItems="center" justifyContent="space-between"> */}
      {/* <Grid item>
            <Typography variant="h5">Unique Visitor</Typography>
          </Grid> */}
      {/* <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid> */}
      {/* </Grid> */}
      {/* <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard> */}
      {/* </Grid> */}
      {/* <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid> */}
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid> */}

      {/* row 4 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid> */}
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                  }}
                >
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'error.main',
                    bgcolor: 'error.lighter'
                  }}
                >
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>  */}
    </Grid>
  );
};

export default DashboardDefault;
