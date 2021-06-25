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
	
		
		new G.Tech({
		name:'deep mining',
		desc:'@Unlocks [burrower] unit<>People have discorvered better techniques for digging deeper into the earth.',
		icon:[7,2],
		cost:{'insight':10},
		req:{'mining':true},
	});
	new G.Unit({
		name:'burrower',
		desc:'@digs the soil for [mud] and [stone]<>[digger]s yield various materials that can be used for tool-making and rudimentary construction.',
		icon:[7,2],
		cost:{},
		use:{'worker':1},
		staff:{'knapped tools':1},
		upkeep:{'coin':0.1},
		effects:[
			{type:'gather',context:'dig',amount:1,max:1},
			{type:'gather',context:'dig',what:{'clay':5},max:1,req:{'pottery':true}},
			{type:'gather',what:{'hollow earth':0.5}},
		],
		req:{'deep mining':true},
		category:'production',
	});
		new G.Tech({
		name:'underground housing',
		desc:'@Unlocks [hollow earth] resource@Unlocks [burrow] unit<>You can now hollow out portions under the earth, and use them to make homes.',
		icon:[27,7],
		cost:{'insight':20},
		req:{'sedentism':true,'deep mining':true,'construction':true},
	});
		new G.Res({
		name:'hollow earth',
		desc:'Space hollowed out inside the earth, usable for many things once they are researched. If you think that makes no sense, than youre right. I dont care though!//The number on the left is how much space is occupied, while the number on the right is how much space you have in total.',
		icon:[14,4],
		displayUsed:true,
	});
		new G.Unit({
		name:'burrow',
		desc:'@provides 10 [housing]<>A sturdy home built to last.',
		icon:[21,3],
		cost:{'basic building materials':75},
		use:{'hollow earth':1},
		//require:{'worker':3,'metal tools':3},
		effects:[
			{type:'provide',what:{'housing':10}},
			{type:'waste',chance:0.01/1000}
		],
		req:{'underground housing':true},
		category:'housing',
	});
	
}
});
