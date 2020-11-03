const test3Bullet = extend(BasicBulletType, {
	update: function(b){
		if(b.timer.get(1, 17)){
			Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), 350.0, false);
		};
	},
	

	
	draw: function(b){
		const colors = [Pal.lancerLaser.cpy().mul(1.0, 1.0, 1.0, 0.4), Pal.lancerLaser, Color.white];
		const tscales = [1.0, 0.7, 0.5, 0.2];
		const lenscales = [1, 1.1, 1.13, 1.14];
		const length = 350.0;
		const f = Mathf.curve(b.fin(), 0.0, 0.2);
		const baseLen = length * f;

		//Lines.lineAngle(b.x, b.y, b.rot(), baseLen);
		for(var s = 0; s < 3; s++){
			Draw.color(colors[s]);
			for(var i = 0; i < 4; i++){
				Lines.stroke(7 * b.fout() * (s == 0 ? 1.5 : s == 1 ? 1 : 0.3) * tscales[i]);
				Lines.lineAngle(b.x, b.y, b.rot(), baseLen * lenscales[i]);
			}
		};
		Draw.reset();
	}
});
test3Bullet.speed = 0.001;
test3Bullet.damage = 400;
test3Bullet.hitEffect = Fx.hitLancer;
test3Bullet.despawnEffect = Fx.none;
test3Bullet.hitSize = 4;
test3Bullet.lifetime = 16;
test3Bullet.pierce = true;


const test3 = extendContent(ChargeTurret, "big-turret-2-mk2", {});

test3.chargeBeginEffect = Fx.lancerLaserChargeBegin;
test3.chargeEffect = Fx.lancerLaserCharge;
test3.smokeEffect = Fx.lancerLaserShootSmoke;
test3.shootEffect = Fx.lancerLaserShoot;
test3.shootType = test3Bullet;