G.AddData({
name:'Tents +more! mod',
author:'Wood Chair',
desc:'A mod that adds tents +more!.',
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
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	//new G.Trait({
		//name:'tent sharing',
		//desc:'@your people will now share tents with one another, allowing tents to provide more housing.',
		//icon:[0,0,'spicySheet'],
		//chance:3,
		//req:{'tent making':true},
		//effects:[
			//{type:'function',func:function(){G.getDict('hot sauce').turnToByContext['eat']['happiness']=0.2;}},//this is a custom function executed when we gain the trait
		//],
	//});
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
		cost:{'leather':10},
		use:{'worker':1},
		staff:{'stone weapons':1},
		modes:{
			'kill':{name:'Commit murder',icon:[5,4],desc:'Just good old fashioned murder.'},
		},
		effects:[
			{type:'provide',what:{'housing':1}},
			{type:'convert',from:{'adult':1},into:{'corpse':1},every:30,mode:'kill'},
		],
		category:'housing',
		req:{'carving':true},
	});
  
}
});
