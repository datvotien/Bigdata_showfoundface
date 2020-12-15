import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {PicSearchData} from './PicSearchData';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '30px',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  img: {
    border: '10px solid #555',
    height: '224px',
    width: 'auto',
    marginRight: '10px',
  },
  image: {
    height: '250px',
    width: '250px',
    marginRight: '10px',
  },
  line: {
    border: '1px solid #ccc',
    marginTop: '50px',
  }
});

let oriPic = 'https://www.siliconera.com/wp-content/uploads/2017/09/ashspikachuhoenhatsm1504769753857_1280w.jpg';
let oriID = '123456';
let oriTimeStamp = '10:00';

let foundPic = [];
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');
foundPic.push('https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg');

let foundID = [];
foundID.push('111111');
foundID.push('222222');
foundID.push('333333');
foundID.push('444444');
foundID.push('555555');
foundID.push('666666');
foundID.push('111111');
foundID.push('222222');
foundID.push('333333');
foundID.push('444444');

class SingleLineGridList extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:props.data ||{}
    }
  }
//Show list of pictures has found.
  GenerateFoundList = ()=>{
    const {data} = this.state;
    const {classes} = this.props;
    return  data.founds.map((tile,index) => (
          <p key={"key"+index}>
            <img src={tile.foundPic} className={classes.image} alt={tile.foundID}/>
            <p><b>ID</b>:{tile.foundID}</p>
          </p>
      ))
  }

  render = ()=>{
    const { classes } = this.props;
    const  {data} = this.state
    return (
       <div className={classes.root}>
         <Grid container justify="center" className={classes.line}>
           <Grid container item xs={3} md={4} lg={3} spacing={3} >
             <p className={classes.oridata}>
               <img src={data.oriPic} className={classes.img} alt={oriID}/>
               <p><b>ID</b>:{data.oriID}</p>
               <p><b>Timestamp</b>:{data.oriTimeStamp}</p>
             </p>
           </Grid>
           <Grid container item xs={9} md={8} lg={9} spacing={3}>
               {this.GenerateFoundList()}
           </Grid>
         </Grid>
       </div>
     );
  }
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
