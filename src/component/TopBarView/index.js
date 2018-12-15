import React, { Component } from "react";
import './TopBarView.scss';

const TopBarView = () => (
	<div className="top-bar-wrapper">
		<div className="right-content-wrapper">
			<button type="button" className="btnMenu">
				<img src="//via.placeholder.com/16x16" alt="메뉴 아이콘" />
			</button>
		</div>
		<div className="center-content-wrapper">
			<select className="selLanguage" value="0">
				<option value="0">English</option>
				<option value="1">Korean</option>
			</select>
		</div>
		<div className="right-content-wrapper">
		</div>
	</div>
);

export default TopBarView;