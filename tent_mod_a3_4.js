G.AddData({
name:'Tents +more! mod',
author:'Wood Chair',
desc:'A mod that adds tents +more!. Disclaimer:"More!" may include cannabalism. Be warned.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
		new G.Unit({
		name:'tent',
		desc:'@Provides 1 [housing]<>A small [leather] tent for 1 person.',
		icon:[9,2],
		cost:{'leather':10},
		effects:[
			{type:'provide',what:{'housing':1}}
		],
		category:'housing',
		req:{'tent making':true},
	});
	new G.Tech({
		name:'tent making',
		desc:'@You can now make [tent]s out of leather.',
		icon:[12,4,23,1],
		cost:{'insight':15},
		req:{'sedentism':true,'leather-working':true},
	});
	
	new G.Trait({
		name:'herb-eating',
		desc:'@Your people are no longer unhappy when eating [herb]s',
		icon:[4,6,22,1],
		chance:10,
		req:{'plant lore':true},
		effects:[
			{type:'function',func:function(){G.getDict('herb').turnToByContext['eating']['happiness']=0.03;}},
		],
	});
  		new G.Unit({
		name:'murderer',
		desc:'@Kills people<>Dont hire these! All they do is murder!.',
		icon:[18,1],
		use:{'worker':1},
		staff:{'stone weapons':1},
		gizmos:true,
		modes:{
			'kill':{name:'Commit murder',icon:[5,4],desc:'Just good old fashioned murder.'},
			'cannibal':{name:'Cannabalize',icon:[6,9],desc:'Convert.',req:{'cannabalism':true}},
		},
		effects:[
			{type:'convert',from:{'adult':1},into:{'corpse':1},every:30,mode:'kill'},
			{type:'convert',from:{'corpse':1},into:{'meat':30,'bone':5},every:1,mode:'cannibal'},
		],
		category:'housing',
		req:{'murder':true},
	});
		new G.Tech({
		name:'murder',
		desc:'@Unlocks [murderer] unit<>So, you have [stone weapons, Weapons] now, why not use those on people?',
		icon:[18,1],
		cost:{'insight':5},
		req:{'spears':true},
	});
		new G.Tech({
		name:'cannabalism',
		desc:'@Allows [murderer, Murderers] to convert corpses into [meat] and [bone].<>Wait, the [murderer, Murderers] are actually useful?',
		icon:[27,7],
		cost:{'insight':10},
		req:{'murder':true,'cooking':true},
	});
}
});
