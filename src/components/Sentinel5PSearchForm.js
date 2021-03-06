import useInput from '../hooks/useInput';
import countryCodes from '../json/country-codes.json';
import SelectCountry from './SelectCountry';

export default function SentinelSP5SearchForm({ onSearch = f => f }) {
	const [countryProps, resetCountry] = useInput("us");
	const [gasProps, resetGas] = useInput("methane");
	const [beginProps, resetBegin] = useInput("2020-01-01");
	const [endProps, resetEnd] = useInput("2021-01-01");

	function handleSubmit(e) { 
		e.preventDefault();

		console.log("countryProps", countryProps);
		console.log("gasProps", gasProps);
		console.log("beginProps", beginProps);
		console.log("endProps", endProps);
		
		onSearch(countryProps.value, gasProps.value, beginProps.value, endProps.value);		
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="formRow">
				<label for="country">Country:
					<SelectCountry countryCodes={countryCodes} countryProps={countryProps} />
				</label>
				<label for="gas">Gas:
					<select
						{...gasProps}
						id="gas"
						name="gas"
						placeholder="gas"
						value={gasProps.value}
						required>
						<option value="methane">Methane</option> 
						<option value="ozone">Ozone</option>
						<option value="carbonmonoxide">Carbon Monoxide</option>
						<option value="nitrogendioxide">Nitrogen Dioxide</option>
					</select>
				</label>
			</div>
			<div className="formRow">
				<label for="begin">Start date:
					<input 
						{...beginProps}
						id="begin"
						name="begin"
						type="date"
						min="2018-12-31"
						required
					/>
				</label>
				<label for="end">End date:
					<input
						{...endProps}
						id="end"
						name="end"
						type="date"
						min="2018-12-31"
						required
					/>
				</label>
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}