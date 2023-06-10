import React,{useState} from 'react';
import '../../style/table.scss'



const Table = () => {

    const [arr,setArr] =useState([

        {
            number:'1',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'2',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'3',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'4',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'5',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'6',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'7',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'8',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'9',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'10',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'11',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'12',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'13',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'14',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'15',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'16',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'17',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'18',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'9',
            text:'Higher accuracy in targeting specific areas of the brain'
        },
        {
            number:'20',
            text:'Higher accuracy in targeting specific areas of the brain'
        }
    ]);

    return (
        <div>
                <div className="why-table">
                {arr.map((item,index)=>(
                <div className="why-table-item" key={index}>
                    <div className="why-item-number">
                        <div className="item-num">{item.number}</div>
                    </div>
                    <div className="why-item-text">{item.text}</div>
                </div>
                ))}

                </div>
                
        </div>
    );
};

export default Table;