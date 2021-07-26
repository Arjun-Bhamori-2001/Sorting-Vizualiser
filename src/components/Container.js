import React,{useState} from 'react'
import Bar from './Bar';
import Header from "./Header"

const Container = () => {

    const getRandomArray = (len) => {
        let temp=[];
        for(let i=0;i<len;i++)
        temp.push(Math.floor(Math.random()*50)+1);
        return temp;
    }

    const genRandomArray = () => {
        setArray(getRandomArray(size));
    }
    
    const [size,setSize] = useState(20);
    const [arr,setArray] = useState(getRandomArray(size));
    const [lap,setLap] = useState(400);

    const setTime = (time) => {
       setLap(time);
    }

    const bubbleSort =() => {
        let tmp=arr.slice();
        let time=0;
        for(let i=0;i<tmp.length;i++)
        {
            for(let j=0;j<tmp.length-i-1;j++)
            {
                let check = 0;
                if(tmp[j+1]<tmp[j])
                {
                    let temp=tmp[j];
                    tmp[j]=tmp[j+1];
                    tmp[j+1]=temp;
                    check=1;
                }
                let newArray=tmp.slice();
                let x=j,y=i;
                setTimeout(() => {
                    if(x)
                    document.getElementById(`bar${x-1}`).style.backgroundColor = "#FFBCBC";
                    document.getElementById(`bar${x}`).style.backgroundColor = "#548CA8";
                    document.getElementById(`bar${x+1}`).style.backgroundColor = "#548CA8";
                    if(x===tmp.length-y-2){
                        document.getElementById(`bar${x}`).style.backgroundColor = "#FFBCBC";
                        document.getElementById(`bar${x+1}`).style.backgroundColor = "#78DEC7";
                    }   
                }, time+=lap);
                if(check){
                    setTimeout(() => {
                        setArray(newArray); 
                        document.getElementById(`bar${x}`).style.backgroundColor = "#E93B81";
                        document.getElementById(`bar${x+1}`).style.backgroundColor = "#E93B81";
                        if(x===tmp.length-y-2){
                            document.getElementById(`bar${x}`).style.backgroundColor = "#FFBCBC";
                            document.getElementById(`bar${x+1}`).style.backgroundColor = "#78DEC7";
                        } 
                    }, time+=lap);
                }
            }
        }
        setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
        }, time+lap);
    }


    const insertionSort = () => {  
        let tmp=arr.slice();
        let time=0;

        for(var i=1;i<size;i++)
         {
             for(var j=i;j>0;j--)
             {
                 if(tmp[j]<tmp[j-1])
                   {
                        let temp=tmp[j];
                        tmp[j]=tmp[j-1];
                        tmp[j-1]=temp;
                   }
                else
                   break;
                let newArray=tmp.slice();
                let x=j,y=i;
                setTimeout(() => {
                    for(var k=0;k<size;k++)
                         document.getElementById(`bar${k}`).style.backgroundColor = "#FFBCBC";  
                    // document.getElementById(`bar${x+1}`).style.backgroundColor = "#FFBCBC";
                    document.getElementById(`bar${x}`).style.backgroundColor =  "#548CA8";
                    document.getElementById(`bar${x-1}`).style.backgroundColor = "#548CA8";
                    setArray(newArray);    
                }, time+=lap);
             }
         }
    }


    return (
        <>
            <Header genRandomArray={genRandomArray} bubbleSort={bubbleSort} setTime={setTime} insertionSort={insertionSort}/>
            <div  className="flex-container" >
                {arr.map((item,index) => <Bar height={item} index={index}/>)}
            </div>
        </>
    )
}

export default Container
