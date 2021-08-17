import React, { useState } from 'react';
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	alpha,
	Badge,
	Avatar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	search: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		padding: '0px 20px',
		borderRadius: theme.shape.borderRadius,
		width: '30%',
		[theme.breakpoints.down('sm')]: {
			display: props => (props.open ? 'flex' : 'none'),
			width: '50%',
		},
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		color: 'white',
		fontWeight: 400,
	},
	close: {
		[theme.breakpoints.up('sm')]: {
			display: "none",
		},
	},
	icons: {
		display: props => (props.open ? 'none' : 'flex'),
		alignItems: 'center',
	},
	searchBtn: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	badge: {
		marginRight: theme.spacing(2),
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });
	return (
		<AppBar>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6">MAD Company</Typography>
				<div className={classes.search}>
					<SearchIcon />
					<InputBase placeholder="search" className={classes.input} />
          <CloseIcon className={classes.close} onClick={()=>setOpen(false)} />
				</div>
				<div className={classes.icons}>
					<SearchIcon
						className={classes.searchBtn}
						onClick={() => setOpen(!open)}
					/>
					<Badge badgeContent={4} color="secondary" className={classes.badge}>
						<MailIcon />
					</Badge>
					<Badge badgeContent={2} color="secondary" className={classes.badge}>
						<NotificationsIcon />
					</Badge>
					<Avatar
						alt="Remy Sharp"
						src="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
