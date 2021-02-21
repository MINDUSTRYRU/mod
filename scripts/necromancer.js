const necromancer = extendContent(UnitType, "necromancer", { 
 update(unit) { 
 this.super$update(unit); 
 Units.nearbyEnemies(unit.team, unit.x - 30, unit.y - 30, 60, 60, cons(u => { 
 if (!u.dead) { 
u.type.spawn(unit.team, u.x, u.y); 
 u.kill(); 
 } 
 })); 
 Units.nearbyEnemies(unit.team, unit.x - 300, unit.y - 300, 600, 600, cons(u => { 
 var v = new Vec2(unit.x-u.x,unit.y-u.y); 
 v.limit(0.8); 
 u.vel.add(v); 
}));
Units.nearbyEnemies(unit.team, unit.x - 100, unit.y - 100, 200, 200, cons(u => { 
 if (!u.dead && u.heath < u.type.heath/2) { 
u.type.spawn(unit.team, u.x, u.y); 
 u.kill(); 
 } 
 })); 
 } 
}); 
necromancer.constructor = prov(() => extend(PayloadUnit, {}));