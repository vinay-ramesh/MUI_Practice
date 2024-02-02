import React, { useState } from 'react'
import { Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Favorite } from '@mui/icons-material'

const MuiTabs = () => {
    const [value, setValue] = useState("1")

    const handleChange = (e: React.SyntheticEvent, newVal: string) => {
        setValue(newVal)
    }
    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
                    <TabList aria-label='Tabs example'
                        onChange={handleChange}
                        indicatorColor='secondary'
                        textColor='secondary'
                        variant="scrollable"
                        scrollButtons="auto"
                    // centered
                    >
                        <Tab label="Tab One" value={"1"} icon={<Favorite />} iconPosition='start' />
                        <Tab label="Tab Two" value={"2"} disabled />
                        <Tab label="Tab Three" value={"3"} />
                        <Tab label="Tab Four" value={"4"} />
                        <Tab label="Tab Five" value={"5"} />
                        <Tab label="Tab Six" value={"6"} />
                    </TabList>
                </Box>
                <TabPanel value='1'>Panel one</TabPanel>
                <TabPanel value='2'>Panel two</TabPanel>
                <TabPanel value='3'>Panel three</TabPanel>
                <TabPanel value='4'>Panel four</TabPanel>
                <TabPanel value='5'>Panel five</TabPanel>
                <TabPanel value='6'>Panel Six</TabPanel>
            </TabContext>
        </Box>
    )
}

export default MuiTabs