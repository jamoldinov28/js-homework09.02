// 1-masalaning - 1-chisi
{
    greeting("John");

    function greeting(name) {
        console.log("Assalomu alaykum " + name);
    }
}


//1-masalaning - 2-chisi
{
    const greeting = function (name) {
        console.log("Assalomu alaykum " + name);
    }
    
    greeting("John");
}


// 1-masalaning - 3-chisi
{
    const greeting = (name) => {
        console.log("Assalomu alaykum " + name);
    }
    
    greeting("John");
}



// 2-masalaning - 1-chisi
{
    function bar(a, b){
        let arr = []
        for(let i = 0; i <= b - a; i++){
            arr[i] = a + i
        }
        return arr
    }
    console.log(bar(3, 6));
    
}


// 2-masalaning - 2-chisi
{
    const bar = function (a, b){
        let arr = []
        for(let i = 0; i <= b - a; i++){
            arr[i] = a + i
        }
        return arr
    }
    console.log(bar(3, 6));
    
}

// 2-masalaning - 3-chisi
{
    const bar = (a, b) => {
        let arr = []
        for(let i = 0; i <= b - a; i++){
            arr[i] = a + i
        }
        return arr
    }
    console.log(bar(3, 6));
    
}



// 3-masalaning - 1-chisi
{
    function foo(p){
        if(p > 0){
            return` true -> ${p}`
    }else{
           return ` false -> ${p}`
    } 
     }
     console.log(foo(1));
     console.log(foo(0));
}

// 3-masalaning - 2-chisi
{
    const foo = function (p){
        if(p > 0){
            return` true -> ${p}`
    }else{
           return ` false -> ${p}`
    } 
     }
     console.log(foo(1));
     console.log(foo(0));
}

// 3-masalani - 3-chisi
{
    const foo = (p) => {
        if(p > 0){
            return` true -> ${p}`
    }else{
           return ` false -> ${p}`
    } 
     }
     console.log(foo(1));
     console.log(foo(0));
}




// 4-masalaning - 1-chisi
{
    function getFirstLetter(name) {
        return name.charAt(0);
    }

    console.log(getFirstLetter("John")); 
}

// 4-masalaning - 2-chisi
{
    const getFirstLetter = function (name) {
        return name.charAt(0);
    }

    console.log(getFirstLetter("John")); 
}
// 4-masalaning - 3-chisi
{
    const getFirstLetter = (name) => {
        return name.charAt(0);
    }

    console.log(getFirstLetter("John")); 
}




// 5-masalaning - 1-chisi
{
    function son(...rest) {
        return rest.reduce((sum, num) => sum + num, 0);
      }
      
      console.log(son(5, 3, 7));      
}

// 5-masalaning - 2-chisi
{
    const son = function (...rest) {
        return rest.reduce((sum, num) => sum + num, 0);
      }
      
      console.log(son(5, 3, 7));      
}

// 5-masalaning - 3-chisi
{
    const son = (...rest) => {
        return rest.reduce((sum, num) => sum + num, 0);
      }
      
      console.log(son(5, 3, 7));      
}