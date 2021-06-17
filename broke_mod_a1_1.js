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
  
  
  
}
});
