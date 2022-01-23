import React from 'react';
import { Navigate } from 'react-router-dom'

function Debits(props){


    const [debit,setDebit] = React.useState([]);
    const [newInfo,setNewInfo] = React.useState([{
                                                    amount: 0,
                                                    description:"",
                                                    date:""
                                                }]);

    React.useEffect(function(){
        if (props.login){
            fetch("https://moj-api.herokuapp.com/debits")
            .then(res => res.json())
            .then(data => setDebit(data))
        }
    },[])

    //sort the date
    debit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
    const display = debit.map((d,index) => <div key={index} className='debit'><li>{new Date(d.date).toLocaleDateString()}</li><li>{d.description}</li><li>{d.amount}</li></div>)

    //listen for submit
    function handleSubmit(e){
        e.preventDefault()
        if (newInfo.description&&newInfo.amount&&newInfo.date){
            setDebit([...debit, newInfo])
            props.onChange("-" + newInfo.amount) //send back the amount enter to parent(App)
        }
    }

    //listen for description input field
    async function descriptionChange (e) {
        console.log(e.target.value)
        await setNewInfo({...newInfo,description: e.target.value,date:new Date().toISOString().toString()})
      }

    //listen for amount input field
    async function amountChange(e){
        await setNewInfo({...newInfo,amount: e.target.value,date:new Date().toISOString().toString()})
    }

    return (
        <div>
            {!props.login && <Navigate to="/" />}
            {props.login && <>
                <h1>Debits</h1>
                <div>Balance: {props.accountBalance}</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={descriptionChange} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" onChange={amountChange} />
                    </div>
                <button>Add Debit</button>
                </form>
                <div className='debits'>{display}</div>
            </>}
        </div>
    );
}

export default Debits;