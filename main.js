function multiply(n){
    if((n%3===0)||(n%5===0)||(n%7===0)){
    
    for(let i=1; i<=20;i++){
    let multi=n*i;
    console.log( n+"*" +i+ "=" + multi)
    }
    
    }
    else{alert(n+" " +"is not a multiple of 3 or 5 or 7")}
    }