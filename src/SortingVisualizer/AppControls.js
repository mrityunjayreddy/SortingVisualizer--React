import './AppControls.css';

function AppControls(props){
   
    const generateArrayHandler = () =>{
        props.onGenerate();
    }
    const sortArrayHandler = () => {
        props.onSort();
    }

    return(
        <div className = 'app-controls'>
          <div className = 'app-controls__btn'> 
          <button onClick = {generateArrayHandler}>Generate Array</button>
          </div> 

          <div className = 'app-controls__selection'>
              <label> 
              Choose an algorithm
              </label>
              <select name = 'searching-algorithm'>
                  <option>Merge Sort</option>
                  <option>Quick Sort</option>
                  <option>Bubble Sort</option>
                  <option>Insertion Sort</option>
              </select>
          </div>

          <div className = 'app-controls__btn' onClick={sortArrayHandler}> 
          <button>Sort Array</button>
          </div> 
        </div>
    );
}

export default AppControls;