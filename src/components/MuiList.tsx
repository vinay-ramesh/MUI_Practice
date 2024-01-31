import { Mail } from '@mui/icons-material'
import { Box, ListItem, ListItemText, List, ListItemIcon, Avatar, ListItemAvatar, ListItemButton, Divider } from '@mui/material'
import React from 'react'

const MuiList = () => {
    return (
        <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary={"List item 1"} secondary="Secndary Text" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary={"List item 2"} secondary="Secndary Text" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary={"List item 3"} secondary="Secndary Text" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList