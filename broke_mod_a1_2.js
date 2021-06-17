G.AddData({
name:'Broke m0d',
author:'Wood Chair',
desc:'A mod that gives you op stuff to play game real fast and test mods',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
  
  
    		new G.Unit({
		name:'dream-bugger',
		desc:'A  version of the [dreamer] that i made so i could get infinite insight and play the game really fast for "debugging".',
		icon:[1,2],
		cost:{},
		use:{'worker':0},
		effects:[
			{type:'gather',what:{'insight':100}},
		],
		req:{'speech':true},
		category:'discovery',
	});
	
	//A bunch of techs to get absurd fast ticks
	
  		new G.Tech({
		name:'tech1',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech2',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech3',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech4',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech5',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech6',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech7',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech8',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech9',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech10',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech11',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech12',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech13',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech14',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech15',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech16',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech17',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech18',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
	  		new G.Tech({
		name:'tech19',
		desc:'yee',
		icon:[0,0],
		cost:{'insight':1},
		req:{'tribalism':true},
	});
  
	// end of the techs
  
}
});
