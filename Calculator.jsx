import React from 'react';

export default function Calculator(props) {
    const [formData, setFormData] = React.useState({age: '', cycles: 1, icsi: '', pgt: '',conditions: [] });
    const [formValid, setFormValid] = React.useState(true);

    const handleSliderChange = (e) => {
        const slider = e.target;
        const percentage = (slider.value / slider.max) * 100;

    // Update the slider's background dynamically
        slider.style.background = `linear-gradient(to right, #F48265 0%, #F48265 ${percentage}%, #EDEEF1 ${percentage}%, #EDEEF1 100%)`;
        setFormData(prevData => ({
            ...prevData,
            cycles: slider.value,
        }));
    };
    
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevData => {
            const updatedConditions = checked
                ? [...prevData.conditions, value]
                : prevData.conditions.filter(item => item !== value);
            return { ...prevData, conditions: updatedConditions };
        });
    };
    
    const validateForm = () => {
        // Validation: first question (age) and third question (icsi, pgt) must be selected
        const isValid = formData.age && formData.icsi && formData.pgt;
        setFormValid(isValid);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            props.onSubmit();
        } else {
            alert('Age range, ICSI and PGT fields are required.');
        }
    };
         
  

  return (
    <section className="calculator-homepage">
        <div className="address">
            <p>Home</p>
            <p>/</p>
            <p className="add1">IVF Success Rate Calculator</p></div>
        <div className="calcular-m-title"><span className="arrow">&#8592;</span>IVF Success Rate Calculator</div>
        <form className="form" onSubmit={handleSubmit}>
            <label className="question one">Which age range applies to you?<br/>
                <div className="radio-grid">
                    <div className="radio-group">
                        <input type="radio" name="age" value="Under 30" checked={formData.age === "Under 30"} onChange={handleRadioChange} />
                        <div className="answer">Under 30</div>  
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="age" value="Between 30 - 34" checked={formData.age === "Between 30 - 34"} onChange={handleRadioChange} />
                        <div className="answer">Between 30 - 34</div>  
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="age" value="Between 35 - 37" checked={formData.age === "Between 35 - 37"} onChange={handleRadioChange} />
                        <div className="answer">Between 35 - 37</div>  
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="age" value="Between 38 - 40" checked={formData.age === "Between 38 - 40"} onChange={handleRadioChange} />
                        <div className="answer">Between 38 - 40</div>  
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="age" value="Between 41 - 43" checked={formData.age === "Between 41 - 43"} onChange={handleRadioChange} />
                        <div className="answer">Between 41 - 43</div>  
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="age" value="Above 43" checked={formData.age === "Above 43"} onChange={handleRadioChange} />
                        <div className="answer">Above 43</div>  
                    </div>
                </div>
            </label>
            
            <label className="question two">Number of IVF Cycles? <br/>
              <div className="slider-container">
                <div className="slider-tooltip" style={{left: `${(formData.cycles / 4) * 100}%`,}}>
                  {formData.cycles}
                </div>
                <input className="range-slider" type="range" min="0" max="4" step="1" value={formData.cycles} onChange={handleSliderChange} />
              </div>
            </label>
            
            <label className="question three">Have you undergone these procedures before?<br/>
                <div className="procedure-types">
                <label className="procedure-question procedure-options-2">ICSI Procedure:
                    <div className="procedure-options">
                        <div className="radio-group">
                            <input type="radio" name="icsi" value="Yes" checked={formData.icsi === 'Yes'} onChange={handleRadioChange} />
                        <div className="answer">Yes</div>  
                        </div>
                        <div className="radio-group">
                            <input type="radio" name="icsi" value="No" checked={formData.icsi === 'No'} onChange={handleRadioChange} />
                        <div className="answer">No</div>  
                        </div>
                    </div>
                </label>
        
                <label className="procedure-question procedure-options-2">PGT Testing:
                    <div className="procedure-options">
                    <div className="radio-group">
                    <input type="radio" name="pgt" value="Yes" checked={formData.pgt === 'Yes'} onChange={handleRadioChange} />
                    <div className="answer">Yes</div>  
                    </div>
                    <div className="radio-group">
                    <input type="radio" name="pgt" value="No" checked={formData.pgt === 'No'} onChange={handleRadioChange} />
                    <div className="answer">No</div>  
                    </div>
                    </div>
                </label>
                </div>
            </label>
            
            <label className="question four">Do you have any of these medical conditions?
                <div className="condition-options">
                 <div className="checkbox-group">
                    <input type="checkbox" name="conditions" value="PCOS" checked={formData.conditions.includes("PCOS")} onChange={handleCheckboxChange} />
                    <div className="answer">PCOS</div>  
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" name="conditions" value="Endometriosis" checked={formData.conditions.includes("Endometriosis")} onChange={handleCheckboxChange} />
                    <div className="answer">Endometriosis</div>  
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" name="conditions" value="Low Ovarian Reserve" checked={formData.conditions.includes("Low Ovarian Reserve")} onChange={handleCheckboxChange} />
                    <div className="answer">Low Ovarian Reserve</div>  
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" name="conditions" value="Male Factor Infertility" checked={formData.conditions.includes("Male Factor Infertility")} onChange={handleCheckboxChange} />
                    <div className="answer">Male Factor Infertility</div>  
                </div>
                </div>
            </label>
            
            <button className="btn submit-btn" type="submit">Calculate</button>
        </form>
    </section>
    )
    };
    