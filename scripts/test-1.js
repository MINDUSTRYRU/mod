const test1Bullet = extend(BasicBulletType, {
	
	update: function(b){
		Effects.shake(1.2, 1.2, b.x, b.y);
		if(b.timer.get(1, 5)){
			Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), 740.0, true);
		}
	},
	
	hit: function(b, hitx, hity){
		if(hitx != null && hity != null){
			Effects.effect(this.hitEffect, Color.valueOf("FF3A24"), hitx, hity);
			if(Mathf.chance(0.1)){
				//Fire.create(world.tileWorld(hitx + Mathf.range(6.0), hity + Mathf.range(6.0)));
				Damage.createIncend(hitx, hity, 6, 1);
			}
		}
	},
	
	draw: function(b){
		
		
		const colors = [Color.valueOf("FF0008"), Color.valueOf("FF4900"), Color.valueOf("FF5900"), Color.valueOf("ffffff")];
		const tscales = [0.5, 0.32, 0.25, 0.14];
		const strokes = [1.45, 1.05, 0.7, 0.35];
		const lenscales = [0.5, 0.56, 0.6, 0.5];
		const tmpColor = new Color();
	
		for(var s = 0; s < 4; s++){
			Draw.color(tmpColor.set(colors[s]).mul(1.0 + Mathf.absin(Time.time(), 1.0, 0.2)));
			for(var i = 0; i < 4; i++){
				Tmp.v1.trns(b.rot(), (lenscales[i] - 0.9) * 35.0);
				Lines.stroke((9 + Mathf.absin(Time.time(), 1.4, 1.5)) * b.fout() * strokes[s] * tscales[i]);
				Lines.lineAngle(b.x + Tmp.v1.x, b.y + Tmp.v1.y, b.rot(), 700.0 * b.fout() * lenscales[i], CapStyle.none);
			}
		};
		Draw.reset();
	}
});

test1Bullet.speed = 0.001;
test1Bullet.damage = 25;
test1Bullet.lifetime = 18;
test1Bullet.hitEffect = Fx.hitMeltdown;
test1Bullet.despawnEffect = Fx.none;
test1Bullet.hitSize = 5;
test1Bullet.drawSize = 610;
test1Bullet.pierce = true;
test1Bullet.shootEffect = Fx.none;
test1Bullet.smokeEffect = Fx.none;

const test1 = extendContent(LaserTurret, "test-1",{});
	
test1.shootType = test1Bullet;
test1.update = true;