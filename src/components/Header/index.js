import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTabShow} from "../../redux/actions/whichShow";
import './style.scss';

const SearchBox = () =>{
    return (
        <div className="search-box">
            <svg className="icon" aria-hidden="true"> <use  xlinkHref="#icon-search1"></use></svg>
            <input type="text"  placeholder="搜索用户/群" />
        </div>  
    )
}

export default class Header extends Component {
	constructor(){
		super();
         	this.state = {
                userInfo:{}
             }
        }
        componentWillMount(){
            this.setState({
                userInfo:JSON.parse(localStorage.getItem("userInfo"))
            }) 
        }
        render() {
            return (
                <div className="header-wrapper">
                    <img src={this.state.userInfo.avator} alt=""/>
                    <SearchBox />
                    <svg className="icon add" aria-hidden="true"><use  xlinkHref="#icon-add"></use></svg>
                </div>
            )
       }
}

// export default connect(state => ({
//     tabShow: state.whichShow.tabShow
//   }), {
//     setTabShow
//   })(Header);