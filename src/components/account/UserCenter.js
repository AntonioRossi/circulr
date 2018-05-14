import React from 'react';

function UserCenter(props) {
  return (
    <div>
    	<div id="account">
    	    <div className="account-side">
    	        <div className="poweroff" id="powerOff">
    	            <div className="icon-unlock"><i className="icon-poweroff"></i></div>
    	            <h5>Quit</h5>
    	        </div>
    	        <div className="blk-lg"></div>
    	        <div className="address">
    	            <div className="text">0xeba7136a36da0f5e16c6bdbc739c716bb5b65a00</div>
    	            <div className="blk"></div>
    	            <button className="btn">Copy</button>
    	        </div>
    	        <div className="blk-lg"></div>
    	        <div className="menu">
    	            <ul>
    	                <li><a href="#" className="side-receive"><i className="icon-receive"></i><span>Receive</span></a></li>
    	                <li><a href="#" className="side-send"><i className="icon-send"></i><span>Send</span></a></li>
    	                <li><a href="#"><i className="icon-trade"></i><span>Trade</span></a></li>
    	                <li><a href="#" className="side-settings"><i className="icon-cog-o"></i><span>Settings</span></a></li>
    	                <li><a href="#" className="side-airdrop"><i className="icon-gift-o"></i><span>Airdrop</span></a></li>
    	                <li><a href="#" className="side-help"><i className="icon-question-o"></i><span>Help</span></a></li>
    	                <li><a href="#" className="side-feedback"><i className="icon-pencil"></i><span>Feedbak</span></a></li>
    	            </ul>
    	        </div>
    	    </div>
    	</div>
    </div>
  )
}
export default UserCenter
