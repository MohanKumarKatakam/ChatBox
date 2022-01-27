import Heading from './components/header/Heading';
import './App.scss';
import Profile from './components/profile/Profile';
import Conversation from './components/conversations/Conversation';
import Users from './components/conversations/Users';
import Details from './components/details/Details';
import Activity from './components/activity/Activity';
import Chat from './components/chat/Chat';
import Onboard from './components/onboard/Onboard';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-padding">
            <Heading />
            <Profile />
            <Conversation title={"Active Conversations"} pendingChats={"5"} data= {Users} expand={true} />
            <Conversation title={"Archived Conversations"} pendingChats={"7"} data= {Users} expand={false} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><Chat /></div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-padding">
            <Details />
            <Activity />
            <Onboard />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

