// for loop

// for(let i = 1 ;i<=10;i++){
//     if(i==5) console.log("5 is best number")
//     console.log(i);
// }

for(let i = 0;i<=10;i++){
    // console.log(`outer loop value: ${i}`);  
    for(let j = 0; j<=10 ;j++){
    //    console.log(`inner loop value ${j}`);
        //   console.log(i + '*' + j + '=' + i*j);    
    }
}

let myArray = ["flash" , "batman", "seperman"]

for(let i =0;i<myArray.length;i++){
    const element = myArray[i]
    console.log(element);
    
}

// break and continue

for(let i=0;i<=20;i++){
    let element = i;
    if(i%2==0) continue
    console.log(element);
    
}