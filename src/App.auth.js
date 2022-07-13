/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date 
 * @modify date 
 * @desc Providing the AuthContext from /src/context which is used in the /src/App.js.
 */

 import React from "react";
 import { BorderLinearProgress } from "qdm-component-library";
 import { NetworkCall } from "./networkcall";
 import { initialMessageCatlog } from "atp-multilingual";
 
 class AppAuth extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       intialLoad: true
     };
   }
 
   async componentDidMount() {
     NetworkCall('meta.json', 'GET', null, null, false, true).then((_) => {
       localStorage.setItem('version', _.data.version)
     }).catch(err => {
       console.log('err:', err);
     })
     await initialMessageCatlog("METADATA_ID");
     localStorage.setItem("language", "en")
     this.setState({ intialLoad: false })
   }
 
   render() {
 
     let { loading } = this.props;
     let { intialLoad } = this.state;
 
     return (
       <>
         {(loading || intialLoad) && (
           <BorderLinearProgress />
         )}
         {!intialLoad && this.props.children}
       </>
     );
   }
 }
 
 export default AppAuth;
 