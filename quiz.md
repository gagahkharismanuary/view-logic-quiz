** We don't expect the answer to be perfect and we don't expect you to finish all. It's open book feel free to hit Google but be prepared to explain your solution.** 

** Good luck!**

## Views


### Recreate this using html and css

![HTML CSS](https://s3.amazonaws.com/f.cl.ly/items/2z3C3Z0L2Q0R282p1V0z/Image%202014-12-19%20at%2010.07.09%20AM.png)

### Using CSS properties alone, recreate this button: 

![Button](http://i.imgur.com/gnZnY.png)


## Logic

### Create a singleton using a real world scenario

### Consider this following array of objects

	```
	var arr = [
	  {
	    name: 'Clark Kent',
	    alterEgo: 'Superman',
	    gender: 'Male',
	    powers: ['super human strength', 'flight', 'x-ray vision', 'heat vision']
	  },
	  {
	    name: 'Barry Allen',
	    alterEgo: 'The Flash',
	    gender: 'Male',
	    powers: ['super speed', 'phasing', 'time travel', 'dimensional travel']
	  },
	  {
	    name: 'Diana Prince',
	    alterEgo: 'Wonder Woman',
	    gender: 'Female',
	    powers: ['super human strength', 'super human reflexes', 'super human agility', 'flight']
	  },
	  {
	    name: 'Bruce Banner',
	    alterEgo: 'The Hulk',
	    gender: 'Male',
	    powers: ['super human strength', 'thunder clap', 'super healing factor']
	  },
	  {
	    name: 'Wade Wilson',
	    alterEgo: 'Deadpool',
	    gender: 'Male',
	    powers: ['super healing factor', 'super human agility']
	  },
	  {
	    name: 'Jean Grey',
	    alterEgo: 'Phoenix',
	    gender: 'Female',
	    powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
	  },
	  {
	    name: 'Wanda Maximoff',
	    alterEgo: 'Scarlet Witch',
	    gender: 'Female',
	    powers: ['reality manipulation', 'astral projection', 'psionic']
	  }
	]
	```

  * Take only the `alterEgo`

	```
	desired result
	['Superman', 'The Flash', 'Wonder Woman', 'The Hulk', 'Deadpool', 'Phoenix', 'Scarlet Witch']
	```
	
  * Take only the `powers`

	```
	desired result
	[
	  'astral projection', 
	  'dimensional travel', 
	  'flight', 
	  'heat vision', 
	  'phasing', 
	  'psionic',
	  'reality manipulation', 
	  'rearrange matter at will',
	  'super healing factor' 
	  'super human agility', 
	  'super human reflexes', 
	  'super human strength', 
	  'super speed', 
	  'telekinesis', 
	  'telepathy', 
	  'thunder clap', 
	  'time travel', 
	  'x-ray vision', 
	]
	```


  * Filter the array to list down, extracting only the `Male` ones
  * Transform the array by grouping them by gender
  
  ```
	desired result
	{
		gender: 'Female'
		heroes: [
			{
				name: 'Jean Grey',
				alterEgo: 'Phoenix',
				powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
			},
			...
		]
	}, {
		gender: 'Male'
		heroes: [
			{
				name: 'Wade Wilson',
				alterEgo: 'Deadpool',
				gender: 'Male',
				powers: ['super healing factor', 'super human agility']
			}
			...
		]
	}
	```

### Refactor this `switch ... case` with readability and maintability in mind
	```
	switch (condition) {
		case foo:
		// Do foo stuffs
		break
		
		case bar:
		// Do bar stuffs
		break
					
		case stool:
		// Do stool stuffs
		break
					
		default:
		// Do default stuffs
		break
    }
	```

### Structure a database using the following data

Fullname       | Gender  | Powers               | Address      | City    | Country   |
---------------| --------| ---------------------|--------------|---------|-----------|
Clark Kent     | Male    | super human strength | 123 A street | Jakarta | Indonesia |
Clark Kent     | Male    | flight               | 333 A street | Jakarta | Indonesia |
Clark Kent     | Male    | x-ray vision         | 234 A street | Jakarta | Indonesia |
Clark Kent     | Male    | heat vision          | 123 A street | Jakarta | Indonesia |
Barry Allen    | Male    | super speed          | 321 A street | Jakarta | Indonesia |
Barry Allen    | Male    | phasing              | 122 A street | Jakarta | Indonesia |
Barry Allen    | Male    | time travel          | 111 A street | Jakarta | Indonesia |
Barry Allen    | Male    | dimensional travel   | 221 A street | Jakarta | Indonesia |
Diana Prince   | Female  | super human strength | 432 A street | Jakarta | Indonesia |
Diana Prince   | Female  | super human reflexes | 453 A street | Jakarta | Indonesia |
Diana Prince   | Female  | super human agility  | 132 A street | Jakarta | Indonesia |
Diana Prince   | Female  | super human flight   | 231 A street | Jakarta | Indonesia |
Bruce Banner   | Male    | super human strength | 521 A street | Jakarta | Indonesia |
Bruce Banner   | Male    | thunder clap         | 444 A street | Jakarta | Indonesia |
Bruce Banner   | Male    | super healing factor | 222 A street | Jakarta | Indonesia |
Wanda Maximoff | Female  | reality manipulation | 524 A street | Jakarta | Indonesia |
Wanda Maximoff | Female  | astral projection    | 324 A street | Jakarta | Indonesia |
Wanda Maximoff | Female  | psionic              | 635 A street | Jakarta | Indonesia |


### Design an API (get, post, put, remove) with as many as endpoints you can think of using the structure you have above