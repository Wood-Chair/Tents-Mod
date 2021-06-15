G.AddData({
name:'Tent mod',
author:'Wood Chair',
desc:'Tents.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
		new G.Unit({
		name:'tent',
		desc:'@provides 1 [housing]<>A small leather tent for 1 person.',
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
		desc:'@You can now make [tent]s out of leather.',
		icon:[0,0,'spicySheet'],
		cost:{'insight':15},
		req:{'sedentism':true},
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
}
});
