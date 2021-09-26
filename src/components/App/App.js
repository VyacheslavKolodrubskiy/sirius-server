import { Route, Switch } from 'react-router';
import AddDevices from '../AddDevices/AddDevices';
import Condition from '../Condition/Condition';
import DailyTasks from '../DailyTasks/DailyTasks';
import Devices from '../Devices/Devices';
import Notifications from '../Notifications/Notifications';
import AdminPanel from '../pages/AdminPanel';
import Login from '../pages/Login';
import Service from '../Service/Service';
import Statistics from '../Statistics/Statistics';
import Subscriptions from '../Subscriptions/Subscriptions';
import UniqTasks from '../UniqTasks/UniqTasks';
import Users from '../Users/Users';

import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={AdminPanel} />
        <Route path='/dashboard' component={Condition} />
        <Route path='/objreg' component={AddDevices} />
        <Route path='/objects' component={Devices} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/service' component={Service} />
        <Route path='/subs' component={Subscriptions} />
        <Route path='/users' component={Users} />
        <Route path='/stats' component={Statistics} />
        <Route path='/dailytasks' component={DailyTasks} />
        <Route path='/uniqtasks' component={UniqTasks} />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
