import React from 'react'

const UserInput = ({onchange, userInput}) => {

  return (
    <section id='user-input' >
        <div className='input-group' >
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => onchange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onchange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className='input-group' >
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => onchange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => onchange('duration', event.target.value)} />
            </p>
        </div>
    </section>
  )
}

export default UserInput
