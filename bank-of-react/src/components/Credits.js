import React from 'react';
import {Link} from 'react-router-dom';

function Credits(props){

    
    
    const [credit,setCredit] = React.useState([]);
    const [newInfo,setNewInfo] = React.useState([{
                                                    amount: 0,
                                                    description:"",
                                                    date:""
                                                }]);
    // fetches credit history when page loads
    React.useEffect(function(){
        fetch("https://moj-api.herokuapp.com/credits")
        .then(res => res.json())
        .then(data => setCredit(data))
    },[])

    //sort the date
    credit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
    const display = credit.map((c,index) => <div key={index} className='credit'><li>{new Date(c.date).toLocaleDateString()}</li><li>{c.description}</li><li>{c.amount}</li></div>)

    //listen for submit
    function handleSubmit(e){
        e.preventDefault()
        if (newInfo.description&&newInfo.amount&&newInfo.date){
            setCredit([...credit, newInfo])
            props.onChange(newInfo.amount) //send back the amount enter to parent(App)
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
            <h1>Credits</h1>
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
            <button>Add Credit</button>
            </form>
            <div className='credits'>{display}</div>
        </div>
    );
        
    
}

export default Credits;