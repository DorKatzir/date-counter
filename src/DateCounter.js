import { useState } from 'react'


export default function DateCounter() {
	return (
		<div>
			<Counter />
		</div>
	)
}

function Counter() {
	const [count, setCount] = useState(0)
	const [step, setStep] = useState(1)

    const date = new Date()
    date.setDate(date.getDate() + count)

	function handleReset(){
		setCount(0) 
		setStep(1)
	}

	return (
		<div className='counterWrapper'>
			<div className='counterBox'>
				<input
					type='range'
					min='1'
					max='10'
					value={step}
					onChange={e => setStep(Number(e.target.value))}
				/>
				<span> Steps: {step} </span>
			</div>
			{/* <div className='counterBox'>
				<button onClick={() => setStep(s => s - 1)}>-</button>
				<span> steps: {step} </span>
				<button onClick={() => setStep(s => s + 1)}>+</button>
			</div> */}

			<div className='counterBox'>
				<button onClick={() => setCount(c => c - step)}>-</button>
				<input
					type='text'
					maxlength='5'
					size={4}
					value={count}
					onChange={e => setCount(Number(e.target.value))}
				/>
				<button onClick={() => setCount(c => c + step)}>+</button>
			</div>

			<div className='result'>
				<p>
					<span>
						{count === 0
							? 'Today is '
							: count > 0
							? `${count} days from today is `
							: `${Math.abs(count)} days ago was `}
					</span>
					{date.toDateString()}
				</p>
			</div>

			{
				(count !== 0 || step !== 1) ?
					<div className='reset'>
						<button onClick={handleReset}>Reset</button>
					</div>
					: null
			}
		</div>
	)
}
