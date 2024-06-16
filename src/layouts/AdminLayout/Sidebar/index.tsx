import HeaderLogo from '../../../components/Header/HeaderLogo';
import { Box, Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const Sidebar = () => {
  const menuList = [
    {
      link: '/product',
      label: 'Sản phẩm',
      icon: <ArticleOutlinedIcon />,
    },
  ];
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 260,
        height: '100%',
        bgcolor: '#fff',
        // borderRight: '1px solid #000',
        boxShadow:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }}>
      <Box
        sx={{
          width: 140,
          m: '28px auto',
          border: '1px solid #fff',
          borderRadius: 2,
        }}>
        <HeaderLogo />
      </Box>
      <List sx={{ mt: 2 }}>
        {menuList?.map((item, index) => (
          <ListItem key={index}>
            <Button
              disableRipple
              component={NavLink}
              to={item.link}
              startIcon={item.icon}
              sx={{
                width: '100%',
                color: '#eeeeee',
                justifyContent: 'start',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                '&.active': {
                  color: (theme) => theme.palette.primary.main,
                  background: '#E6EFFE',
                },
              }}>
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
