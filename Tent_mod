G.AddData({
name:'Tents Mod',
author:'Wood Chair',
desc:'This is just a solution to the endgame problem of not having engough land for housing. Don’t ask about graves still taking up land and things, i just forgot to add a solution to them.',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:
func:function(){
};
        new G.Res({
        name:'Tents',
        desc:'Tents provide an easy solution to the late game problem of not having any land. this allows you to continue playing without hitting the wall of land.',
        icon:[2,3,'SHEET PLACEHOLDER'],
        partOf:'misc materials',
        category:'misc',
    });
        new G.Unit({
        name: 'Tent Maker',
        desc: 'Creates [Tents] out of leather.',
        icon:[2,3,'SHEET PLACEHOLDER'],
        cost:{},
        req:{'Tent Making':true},
        use:{'Worker:1},
        staff:{'stone tools':1},
        upkeep:{}
        effects:[
            {type:'convert',from:{'Leather':5},into:{'Tents':1},chance:10/10,every:1},
    });
        new G.Tech({
        name:'Tent Making',
        desc:'Unlocks the making of [Tents].'
        icon:[2,3,'SHEET PLACEHOLDER'],
        cost:{'Insight':80},
        req:{'sedentism':true},
    });
