import { createStackNavigator,createAppContainer } from "react-navigation";
import LoginForm from "../src/Components/LoginForm";
import Dashboard from "./Components/dashboard";

const AppNavigator = createStackNavigator({
    Home: LoginForm,
    dashboard:{
        screen:Dashboard,
        
    }
})

export default createAppContainer(AppNavigator)