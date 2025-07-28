G.AddData({
name:'Tents +more! mod',
author:'Wood Chair',
desc:'A mod that adds tents +more!. Disclaimer:"More!" may include cannabalism. Be warned.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'spicySheet':'https:wood-chair.github.io/Tents-Mod/Untitled.png'},
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
		name:'herb eating',
		desc:'@Your people are no longer unhappy when eating [herb]s',
		icon:[4,6,22,1],
		chance:10,
		req:{'plant lore':true},
		effects:[
			{type:'function',func:function(){G.getDict('herb').turnToByContext['eating']['happiness']=0.03;}},
		],
	});
		new G.Trait({
		name:'cooked foods',
		desc:'Your people are used to eating [cooked meat, cooked] foods. They gain more happiness from [cooked meat, cooked] foods, but lose more from [meat, raw] meats.',
		icon:[6,7,22,1],
		cost:{'cooked meat':20},
		chance:10,
		req:{'cooking':true},
		effects:[
			{type:'function',func:function(){G.getDict('cooked meat').turnToByContext['eating']['happiness']=0.06;}},
			{type:'function',func:function(){G.getDict('meat').turnToByContext['eating']['happiness']=-0.01;}},
		],
	});
	
	
	
		new G.Trait({
		name:'belief in a benevolent pantheon',
		desc:'@Unlocks new research<>Your people have adopted the idea of a benevolent pantheon. This unlocks new research into further religous ideas.',
		icon:[26,8],
		chance:15,
		req:{'belief in the afterlife':true, 'belief in a malevolent pantheon':false},
	});
		new G.Trait({
		name:'belief in a malevolent pantheon',
		desc:'@Unlocks new research<>Your people have adopted the idea of a malevolent pantheon. This unlocks new research into further religous ideas.',
		icon:[27,8],
		chance:15,
		req:{'belief in the afterlife':true, 'belief in a benevolent pantheon':false},
	});
	
	
	new G.Tech({
		name:'appeasement of the gods',
		desc:'@Unlocks [appeasement] meter@Unlocks [ritualist]<>Your people decide to sacrifice various things in order to appease the gods. Keeping their gods appeased will ease your peoples worries, and may prevent far worse things...',
		icon:[12,4,23,1],
		cost:{'insight':15},
		req:{'belief in a malevolent pantheon':true},
	});
	new G.Unit({
		name:'ritualist',
		desc:'@Sacrifices items to the gods, generating [appeasement] and [happiness] every now and then.<>[ritualist]s appease the gods by granting them regular sacrifices.',
		icon:[15,2],
		cost:{},
		use:{'worker':1},
		upkeep:{'coin':0.2},
		effects:[
			{type:'gather',what:{'appeasement':1,'happiness':0.2}},
			{type:'gather',what:{'appeasement':0.5},req:{'symbolism':true}}
		],
		req:{'appeasement of the gods':true},
		category:'spiritual',
	});
	
	
	
  		new G.Unit({
		name:'murderer',
		desc:'@Kills people<>Dont hire these! All they do is murder!.',
		icon:[18,1],
		use:{'worker':1},
		staff:{'stone weapons':1},
		gizmos:true,
		modes:{
			'kill':{name:'Commit murder',icon:[5,4],desc:'Just good old fashioned murder. Not good for [happiness, morale] though!'},
			'cannibal':{name:'Cannabalize',icon:[6,9],desc:'Turn [corpse]s into meat! Finally, a use for those things...',req:{'cannabalism':true}},
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
	
	new G.Unit({
		name:'barn',
		desc:'@provides 4000 [food storage]<>A large wooden building for storing food. A worker manages the grain to prevent rot.',
		icon:[24,4],
		cost:{'basic building materials':500},
		use:{'land':2},
		staff:{'worker':1},
		require:{'worker':2,'stone tools':2},
		effects:[
			{type:'provide',what:{'added food storage':4000}},
			{type:'waste',chance:0.001/1000}
		],
		req:{'stockpiling':true,'carpentry':true},
		category:'storage',
	});
	new G.Tech({
		name:'medical science',
		desc:'@Unlocks [hospital] unit<>So, you have [stone weapons, weapons] now, why not use those on people?',
		icon:[18,1],
		cost:{'insight':5},
		req:{'spears':true},
	});
	new G.Unit({
		name:'hospital',
		desc:'@Heals the [sick] and the [wounded] faster than a [healer] using more complex medicine.<>Hospitals gather workers together to heal and research.',
		icon:[23,3],
		cost:{'basic building materials':500},
		use:{'worker':3},
		staff:{'stone tools':3},
		effects:[
			{type:'convert',from:{'sick':1,'herb':2.5},into:{'adult':1},chance:4/5,every:3},
			{type:'convert',from:{'wounded':1,'herb':2.5},into:{'adult':1},chance:3/5,every:10},
		],
		req:{'medical science':true},
		category:'civil',
		priority:5,
	});
	
	
	
	new G.Unit({
		name:'metropolis',
		desc:'@Provides 15000 housing.<>A city, to house the growing population of your empire. A true monument to the achievements of your people.',
		wonder:'metropolis',
		icon:[1,14],
		wideIcon:[0,14],
		cost:{'basic building materials':2000},
		costPerStep:{'basic building materials':500,'precious building materials':20},
		steps:100,
		messageOnStart:'You have begun the contstruction of a metropolis. The first building in a grand city, a tower to mark the origin and center of this place, stands over you, and as you marvel at its height, the sun sets upon the first day of construction. The first of many, many days.',
		finalStepCost:{'precious building materials':300, 'statuette':1, },
		finalStepDesc:'As a crown to the metropolis, a small temple is constructed in the heart of the city. An inscription carved upon it reads, "A city made by the people stands tall, but only in its servitude to the people. As should a ruler."',
		use:{'land':1000},
		require:{'worker':10,'stone tools':10},
		effects:[
			{type:'provide',what:{'housing':15000}},
		],
		req:{'city planning':true},
		category:'wonder',
	});
	
}
});
