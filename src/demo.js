import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SingleLineGridList from "./SingleList";
import {PicSearchData} from './PicSearchData';
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
  title: {
    display: 'none',
    position:'fixed',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});
const data = [
  {
    foundID:111111,
    title:"111111",
    img:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'
  },{
    foundID:111112,
    title:"111111",
    img:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'
  },{
    foundID:111113,
    title:"111111",
    img:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg',
  }
]
function buildSingleList(){
  return Array.from(Array(1).keys()).map( (item,index) => <SingleLineGridList data={data} key={item}/>)
}

// function SearchAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography className={classes.title} variant="h6" color="inherit" noWrap>
//             Finding Face Result
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       {buildSingleList()}
//     </div>
//   );
// }



class SearchAppBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      data:[
        {
          oriPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg',
          oriID:"123456",
          founds:data
        }
      ]
    }
  }
  buildSingleList(){
    console.log(this.state.data)
    return this.state.data.map((item) => <SingleLineGridList data={item} key={item.oriID}/>)
  }

  Insert = (ori)=>{
      if(!ori){
        return;
      }
      this.setState({data:[...this.state.data,ori]})
  }

componentDidMount = ()=>{
  setTimeout (()=>{
    this.Insert({
      oriPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg',
      oriID:"123457",
      founds:data
    })
  },5000)
}

  render = ()=>{
      const { classes } = this.props;

    return (
      <div className={classes.root}>
           <AppBar position="fixed">
             <Toolbar>
               <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                 Finding Face Result
               </Typography>
             </Toolbar>
           </AppBar>
           {this.buildSingleList()}
         </div>
    )
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
