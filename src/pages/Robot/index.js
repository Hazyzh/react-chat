import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRobotMsg , insertUserMsg} from "../../redux/actions/robot";

import './style.scss';
import ChatItem from '../../components/ChatItem';
import InputArea from '../../components/InputArea';
import {
	toNomalTime
} from "../../utils/transformTime";

class Robot extends Component {
	constructor(){
		super();
         	this.state = {
                currentTab: 2,
                time: toNomalTime(Date.parse(new Date()) / 1000),
                inputMsg: "",
                userInfo:{},
                isScrollToBottom: true
             }
        }
		refresh() {
			setTimeout(() => {
				window.scrollTo(0, document.body.scrollHeight + 10000)
			}, 0)
        }
        componentWillMount(){
            this.setState({
                userInfo:JSON.parse(localStorage.getItem("userInfo"))
            }) 
        }
        componentDidMount(){
            setTimeout(() => {
                this.refresh();
            }, 200)
        }
        sendMessage =  async (value) => {
    
            this.setState({
                inputMsg: value
            },()=>{
                console.log(' this.state.inputMsg', this.state.inputMsg);
                this.props.insertUserMsg(
                    { message: this.state.inputMsg }
                );
                this.props.getRobotMsg(
                    { message: this.state.inputMsg }
                )
            })

        }

        render() {
            console.log("this.props.state.robot", this.props.state.robot)
            const listItems = this.props.state.robot.map((msg,index) =>
                 <li key={index}>
                 {msg.user && <ChatItem  img="http://ooytyiziz.bkt.clouddn.com/robot.gif" msg={msg.message} name={msg.user} time={this.state.time} />}
                 {!msg.user && <ChatItem me="true" img={this.state.userInfo.avator}  msg={msg.message} name={this.state.userInfo.name} time={this.state.time} />}
              </li>
            );
            return (
                    <div className="robot-wrapper">
                        <ul>
                            {listItems}
                        </ul>
                        <InputArea sendMessage={this.sendMessage}/>
                    </div>
            )
       }
}

export default connect(state => ({
    state: state
  }), {
    getRobotMsg,
    insertUserMsg
  })(Robot);