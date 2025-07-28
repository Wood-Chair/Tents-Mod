G.AddData({
name:'Tent mod',
author:'Wood Chair',
desc:'Tents.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'spicySheet':'https://wood-chair.github.io/Tents-Mod/Untitled.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
		new G.Unit({
		name:'tent',
		desc:'@People can sleep here',
		icon:[0,0,'spicySheet'],
		cost:{'leather':10},
		effects:[
			{type:'provide',what:{'housing':1}}
		],
		category:'housing',
		req:{'tent making':true},
	});
	new G.Tech({
		name:'tent making',
		desc:'@You can now make tents.',
		icon:[0,0,'spicySheet'],
		cost:{'insight':15},
		req:{'sedentism':true},
	});
}
});
