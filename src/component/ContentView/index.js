import React, { Component } from "react";
import './ContentView.scss';

const ContentView = () => (
	<div className="content-wrapper">
		<div className="login-wrapper">
			<img className="logo" src="//via.placeholder.com/175x51" alt="인스타그램 로고" />
			<img className="avatar" src="//via.placeholder.com/150x150" alt="프사" />
			<button type="button">
				Continue as jiwonsis
			</button>
			<p>Not jiwonsis? <a href="#">Switch account</a></p>
		</div>
	</div>
);

export default ContentView;