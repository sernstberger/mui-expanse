import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export interface NavItem {
  icon: React.ElementType;
  text: string;
  subItems?: NavItem[];
}

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={item.subItems ? handleClick : undefined}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
            {item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {item.subItems && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem, subIndex) => (
                  <ListItemButton key={subIndex} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <subItem.icon />
                    </ListItemIcon>
                    <ListItemText primary={subItem.text} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
