import React from 'react';
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  // container:{
  //   backgroundColor: 'white',
  //   color: 'black',
  //   border: '2px solid #4CAF50',
  //   flexWrap: 'nowrap',
  //   transform: 'translateZ(0)',
  // },

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

// const tileData = [
//   {
//     img: "https://source.unsplash.com/random/600*600",
//     title: "Image",
//     author: "author",
//   }
// ];

// let tileDatas = [];

// for (var i=0; i< 10; i++){
//   tileData.forEach(item => tileDatas.push(item));
// }
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

const tileDatas = PicSearchData(foundPic, foundID);
//////////
function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.line}>
        <Grid container item xs={3} md={4} lg={3} spacing={3} >
          <p className={classes.oridata}>
            <img src={oriPic} className={classes.img} alt={oriID}/>
            <p><b>ID</b>:{oriID}</p>
            <p><b>Timestamp</b>:{oriTimeStamp}</p>
          </p>
        </Grid>
        <Grid container item xs={9} md={8} lg={9} spacing={3}>
            {tileDatas.map(tile => (
                  <p>
                    <img src={tile.img} className={classes.image} alt={tile.foundID}/>
                    <p><b>ID</b>:{tile.title}</p>
                  </p>
              ))}
        </Grid>
      </Grid>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
