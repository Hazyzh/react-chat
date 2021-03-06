import React, {Component} from 'react';
import ChatHeader from '../../components/ChatHeader';
import ChatItem from '../../components/ChatItem';
import InputArea from '../../components/InputArea';
import {
    withRouter,
    Link
  } from 'react-router-dom'
class PrivateChat extends Component {
	constructor(){
		super();
         	this.state = {
                message:[],
                userInfo: {}
             }
        }

        getChatMsg = () => {
            axios.get(
                '/api/v1/private_chat', {
                    params: {
                        groupId: this.groupInfo.groupId
                    }
                }).then((res) => {
                    console.log('res', res);
                    // if (res.data.success) {

                    // }
                })  
        }
        
        sendMessage = () => {
            
        }
        
        render() {   
            // const listItems = this.state.message.map((item,index) =>
            //     <li key={index}>
            //         {this.state.userInfo.user_id === item.from_user ? <ChatItem img={item.avator} msg={item.message} name={item.name} time={item.time} />
            //         : <ChatItem img={item.avator}  msg={item.message} name={item.name} time={item.time} />}
            //     </li>
            // );
            return (
                <div className="robot-wrapper">
                <ChatHeader title={this.props.match.params.user_id}/>
                <ul>
                    {/* {listItems} */}
                </ul>
                <InputArea sendMessage={this.sendMessage}/>
            </div>
            )
       }
}

export default  withRouter(PrivateChat);
// export default connect(state => ({
//     robotMsg: state.robot.robotMsg
//   }), {
//     getRobotMsg,
//     insertUserMsg
//   })(GroupChat);