import './BarsContainer.css';
import Bars from './Bars';
import AppControls from './AppControls';
import React,{useState} from 'react';
let noOfBars = 200;
let bwidth = 5;
const DUMMY_ARRAY = new Array(noOfBars);
    for (let i = 0; i < noOfBars; i++) {
        let x = Math.floor((Math.random() * 600) + 1);
        DUMMY_ARRAY[i] = x;
    }

function BarsContainer(props){
    const [currentArray,updateArray] = useState(DUMMY_ARRAY);

    function generateArray() {
        updateArray([]);
        const newArray = new Array(noOfBars);
        console.log("Array was generated");
        for (let i = 0; i < noOfBars; i++) {
            let x = Math.floor((Math.random() * 600) + 1);
            newArray[i] = x;
        }
        updateArray(newArray);
    }

    function sortArray(){
        binarySearch();
    }

    function binarySearch(){
        let sorted = false;
        const testArray = new Array(noOfBars);
        for(let i = 0;i<noOfBars;i++)
        testArray[i] = currentArray[i];
        while(!sorted){
         sorted = true;
         let i = 0;
         while(i<noOfBars-1){
             if(testArray[i] > testArray[i+1]){
                 let temp = testArray[i];
                 testArray[i] = testArray[i+1];
                 testArray[i+1] = temp;
                 sorted = false;
             }
             const temp = new Array(noOfBars);
             for(let i = 0;i<noOfBars;i++) 
             temp[i] = testArray[i];
             const update = ()=>{
                updateArray(temp);
            } 
            setTimeout(update,10)  
             i++;
         }
        }
       
        console.log(testArray);;
    }
    
    return(
        <div>
        <AppControls onGenerate ={generateArray} onSort ={sortArray} ></AppControls>   
        <div className = 'bars-container'>
         {currentArray.map((value,idx) => 
            <Bars key={idx} style={{ height: `${value + 50}px` , width:`${bwidth}px`}}>
                </Bars>
         )}
        </div>
        </div>
        
    );
 }

export default BarsContainer;

