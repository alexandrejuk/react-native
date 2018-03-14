import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';

const Main = StackNavigator({
  Posts: { screen: Posts },
  Profile: { screen: Profile },  
});

 

export default Main;