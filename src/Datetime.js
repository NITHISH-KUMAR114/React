import react from 'react'

var Datetime = ()=>
{
    var date=new Date();
    var display=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    var dt=date.toLocaleTimeString();
    var time=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return(
        <div>
            <center>
                 {/* <input type="text" value={display} readOnly="true" /> */}
                <b>
                {}
                <br />
                {display}
                <br />            
                {dt}
                </b>
            </center>
            
        </div>
    );
}
export default Datetime;
