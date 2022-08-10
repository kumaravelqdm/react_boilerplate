/**
 * @author kumaravel pazhani
 * @email kumaravel.pazhani@ainqa.com
 * @create date
 * @modify date
 * @desc The private route check wheather the user is logged in or not and also check
 * wheather the request route from the user is accessible to them or not using the Access(role,path)
 * function then allow to the particular route or else it will redirect to login page.
 */

 import React from "react";
 import { Redirect, Route } from "react-router-dom";
 import { Routes } from "./routes";
 import { useDispatch } from "react-redux";
 
 const PrivateRoute = (routeprops) => {
   const dispatch = useDispatch();
 
   let { render: Component, path, isIdmEnabled, ...rest } = routeprops;
 
   const checkAccess = () => {
     try {
         let data = localStorage.getItem("role_data");
         const accessObj =
           JSON.parse(atob(data))?.[localStorage.getItem("role_name")]
             ?.accessedRouters || [];
         if (accessObj?.length === 0) {
           throw new Error("Invalid Permissions");
         }
         return (
           localStorage.getItem("role_name") &&
           accessObj.indexOf(path) > -1 
         );
     } catch (err) {
       localStorage.removeItem("token");
       localStorage.removeItem("role_name");
       localStorage.removeItem("role_data");
       localStorage.removeItem("remove_item");
       return false;
     }
   };
 
   return (
     <Route
       {...rest}
       render={(props) =>
         checkAccess() ? <Component {...props} /> : <Redirect to={"/"} />
       }
     />
     // <Route
     //   {...rest} render={(props) =>  (
     //     <Component {...props} />
     //   )
     //   }
     // />
   );
 };
 
 export default PrivateRoute;
 
