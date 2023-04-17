import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
//
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
  
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClose = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        //   backgroundColor: theme.palette.common.black,
          color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(ACCESORIES , Category , Categorys,Category1) {
        return { ACCESORIES , Category , Categorys ,Category1};
      }
      
      const rows = [
        createData('Airpad & Wirless', 'Camers&Video', 'Charging Device', 'Headphones','Mice&Keyboards'),
        createData('AppleCare', 'Cars & Travel','Connected Home','HealthKit', 'Music Creations'),
        createData('Bags ,Shells & Sleeves', 'Cases &Films', 'Device', '', 'NetWorking & Server'),
        createData('Business & Security','' , 'Display & Graphic', '', ''),
        createData('Cable & Docks', '', 'Fitness & Sports', '', ''),
      ];
  return (
      <>
             <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <Paper>
                          <Typography sx={{ p: 2 }}style={{backgroundColor:' #b6b2b23e'}}>
                <TableContainer component={Paper} >
      <Table sx={{ minWidth: 950 }} aria-label="customized table" >
        <TableHead>
          <TableRow >
            <StyledTableCell id='text-table'>ACCESORIES</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right" id='text-table'>Category</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right" id='text-table'>Categorys</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" id='text-table1'>
                {row.ACCESORIES}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right" id='text-table1'>{row.Category}</StyledTableCell>
              <StyledTableCell align="right" id='text-table1'>{row.Category1}</StyledTableCell>
              <StyledTableCell align="right" id='text-table1'>{row.Categorys}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                              

              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
          <div className="tool-bar">
              <div>
              <select name="" id="price-nav">
                  <option value="" >EN</option>
                  <option value="">IN</option>
                  </select>
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <select name="" id="price-nav">
                  <option value="">$</option>
                  <option value="">&#8377;</option>
              </select>
            </div>
              <span className='profile-nav'>&nbsp; <i class="bi bi-person-circle" style={{ fontSize: '25px' }}> &nbsp;&nbsp;</i>&nbsp;<span style={{ fontSize: '17px' }}>My Profile&nbsp;</span><i class="bi bi-bag-check-fill"  style={{ fontSize: '25px' }}></i></span>
              

              {/* // */}
              
             {/*  */}
             
          </div>
          

          <div className='headings-nav'>
              <h1 style={{color:'#FF4252'}}>iSHOP</h1>
          <Link to='/' style={{textDecoration:'none' ,color:'#262626',marginRight:'70px'}}> <span className='nav-hov'>HOME</span></Link>
          <Link to='/STORE' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov' onMouseEnter={handleClick('bottom')} onMouseLeave={handleClose('bottom')}>STORE</span></Link>
          <Link to='/IPHONE' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>IPHONE</span></Link>
          <Link to='/IPAD' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>IPAD</span></Link>
          <Link to='/MACKBOOK' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>MACKBOOK</span></Link>
          <Link to='/ACCESORIES' style={{textDecoration:'none',color:'#262626',marginRight:'70px'}}><span className='nav-hov'>ACCESORIES</span></Link>
              
          </div>
      
      </>
  )
}

export default Nav
