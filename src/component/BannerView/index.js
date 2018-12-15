import React, { Component } from "react";
import './BannerView.scss';

const BannerView = () => (
	<div className="banner-wrapper">
		<div className="desc-wrapper">
			<h2>Instagram</h2>
			<p>Find it for free on Google Play</p>
		</div>
		<button type="button" className="btnGet">
			GET
		</button>
	</div>
);

export default BannerView;