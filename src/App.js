import { useState } from 'react';
import SentinelSP5Chart from './components/Sentinel5PChart';
import SentinelSP5SearchForm from './components/Sentinel5PSearchForm';
import './App.css';

export default function SentinelSP5Page() {
	const [country, setCountry] = useState("us");
	const [gas, setGas] =  useState("methane");
	const [begin, setBegin] = useState("2020-02-01");
	const [end, setEnd] = useState("2021-01-31");

	function handleSearch(country, gas, begin, end) {
		console.log("search function", country, gas, begin, end);
		setCountry(country);
		setGas(gas);
		setBegin(begin);
		setEnd(end);
	}

	return ( 
		<div className="sentinelsp5-page">
			<h3>Charting Greenhouse Gas Emissions</h3>
			<h4>Source: <a href="https://emissions-api.org/">Sentinel-5P</a> satellite data.</h4>
			<SentinelSP5SearchForm onSearch={handleSearch}/>
			<SentinelSP5Chart country={country} gas={gas} begin={begin} end={end} />

		</div>
	);
}