var name = userInput['mark'];
    var count =0;
  	function findvowel(name)
    {
    	var vowel = ['a','e','i','o','u','A','E','I','O','U'];
      	for(i=0;i<name.length;i++)
      	{
      		if(vowel.includes(name[i]))
        	{
          		count++;
        	}
      	}
      	return count;
    }
    
  console.log(findvowel(name));