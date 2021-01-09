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


let oriData =
  {
  
  }

let vectorIds = []
let imageParam = ""


class SearchAppBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[
        
      ],
      events: [],
      images: []
    }    
  }
  //print to screen list view of oriPic and foundPic by oriID
  buildSingleList(){
    return this.state.data.map((item) => <SingleLineGridList data={item} key={item.oriID}/>)
  }

  insertParamVector(vectorIds) {
    let param = ""
    for (var i = 0; i < vectorIds.length; i++) {
      param = param + "id=" + vectorIds[i] + "&"
    }

    return param
  }

  

  Insert = (oriArray)=>{
      if(oriArray.length == 0){
        return;
      }
      
      this.setState({
        data: oriArray
      })
  }

  createArrayVectorIds(dataEventsReq) {
    vectorIds = []
    for (var i = 0; i < dataEventsReq.length; i++) {
      for (var j = 0; j < dataEventsReq[i].vector_ids.length; j ++) {
        vectorIds = vectorIds.concat(dataEventsReq[i].vector_ids[j])
      }
    }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    vectorIds = vectorIds.filter(onlyUnique)

    return vectorIds
  }

  createDataImageMap(arrayImages) {
    var result = arrayImages.reduce(function(map, obj) {
      map[obj.vector_ids] = obj;
      return map;
    }, {});

    var oriSimiArray = []
    for (var i = 0; i < this.state.events.length; i++) {
      var eventData = this.state.events[i]
      oriData = {
        query_image: eventData.query_image,
        camera_id: eventData.camera_id,
        timestamp: eventData.timestamp,
      }

      var dataFound = []

      for (var j = 0; j < eventData.vector_ids.length; j++) {
        var vector_id = eventData.vector_ids[j]
        var objectImage = result[vector_id]
        if (objectImage != undefined) {
          var dataFoundObject = {
            foundID: vector_id,
            foundPic: objectImage.image_base64,
            personID: objectImage.person_id,
          }
  
          dataFound.push(dataFoundObject)
        }
        
        if (dataFound.length == 4) {
          break
        }
      }

      var simiObject = {
        ori: oriData,
        founds:dataFound
      }

      oriSimiArray.push(simiObject)
    }

    console.log(simiObject)

    setTimeout (()=>{
      this.Insert(oriSimiArray)
    },10)

    console.log(this.state.events)
    console.log(this.state.images)
    console.log(result)

    return result
  }

  fetchGetEvents() {
    fetch('/v1/events')
    .then((response) => response.json().then((res) => {
      this.setState({
        events: res.slice(0,10).map(item => {
          return {
            query_image: item.query_image,
            timestamp: item.timestamp,
            camera_id: item.camera_id,
            vector_ids: item.vector_ids,
          };
        })
      }, () => {
        vectorIds = this.createArrayVectorIds(this.state.events);
        imageParam = this.insertParamVector(vectorIds)
        this.fetchGetImage(imageParam)
      });
    }));
  }

  fetchGetImage(param) {
    fetch('/v1/images?' + param)
    .then((response) => response.json().then((res) => {
      this.setState({
        images: res.map(item => {
          return {
            image_base64: item.image_base64,
            vector_ids: item.vector_ids,
            person_id: item.person_id,
          };
        })
      }, () => {
        this.createDataImageMap(this.state.images)
      });
    }));
  }

//demo call function Insert()
  componentDidMount = ()=>{
    this.fetchGetEvents()

    //setInterval(this.fetchGetEvents, 10000);
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
