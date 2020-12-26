import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SingleLineGridList from "./SingleList";
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    position:'fixed',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

let dataFound = [
  {
    foundID:"111111",
    foundPic:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'
  },{
    foundID:"111112",
    foundPic:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'
  },{
    foundID:"111113",
    foundPic:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg',
  }
]
let oriData =
  {
    oriPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg',
    oriID:"123456",
    oriTimeStamp: "10:00"
  }


class SearchAppBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[
        {
          ori: oriData,
          founds:dataFound
        }
      ]
    }
  }
  //print to screen list view of oriPic and foundPic by oriID
  buildSingleList(){
    return this.state.data.map((item) => <SingleLineGridList data={item} key={item.oriID}/>)
  }

  Insert = (ori)=>{
      if(!ori){
        return;
      }
      //copy data from ori to this.state.data
      this.setState({data:[...this.state.data,ori]})
  }


//demo call function Insert()
  componentDidMount = ()=>{
    setTimeout (()=>{
      oriData = {
        oriPic:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg',
        oriID:"123459",
        oriTimeStamp: "10:09"
      }
    
      dataFound = [
        {
          foundID:"111114",
          foundPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg'
        },{
          foundID:"111115",
          foundPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg'
        },{
          foundID:"111116",
          foundPic:'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg',
        }
      ]
      this.Insert({
        ori: oriData,
        founds:dataFound
      })
      console.log(this.state.data)
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
