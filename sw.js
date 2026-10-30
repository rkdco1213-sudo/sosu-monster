/* 소수 몬스터 탐험 — 오프라인 캐시 (자동 생성, 직접 고치지 마세요) */
const CACHE='sosu-ffd9a3f1b1';
const CORE=["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "assets/buildings/gym.png", "assets/buildings/heal.png", "assets/buildings/house.png", "assets/characters/hero.png", "assets/characters/hero_back.png", "assets/characters/heroine.png", "assets/characters/heroine_back.png", "assets/characters/leader.png", "assets/characters/mom.png", "assets/characters/trainer1.png", "assets/characters/trainer2.png", "assets/monsters/baekbun.png", "assets/monsters/banjjak.png", "assets/monsters/dotdragon.png", "assets/monsters/jariba.png", "assets/monsters/jeomkong.png", "assets/monsters/sosuri.png", "assets/monsters/ttokttak.png", "assets/props/chairL.png", "assets/props/chairR.png", "assets/props/pc.png", "assets/props/plant.png", "assets/props/rug.png", "assets/props/shelf.png", "assets/props/stairs.png", "assets/props/table.png", "assets/props/tv.png", "assets/tiles/fence.png", "assets/tiles/flower.png", "assets/tiles/grass.png", "assets/tiles/gym_floor.png", "assets/tiles/gym_mat.png", "assets/tiles/gym_statue.png", "assets/tiles/gym_wall.png", "assets/tiles/home_floor.png", "assets/tiles/home_mat.png", "assets/tiles/home_wainscot.png", "assets/tiles/home_wall.png", "assets/tiles/home_window.png", "assets/tiles/ledge.png", "assets/tiles/path.png", "assets/tiles/sign.png", "assets/tiles/tall_grass_1.png", "assets/tiles/tall_grass_2.png", "assets/tiles/tree.png", "assets/tiles/water.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('sosu-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),same=u.origin===location.origin;
  if(r.mode==='navigate'||(same&&(u.pathname.endsWith('/')||u.pathname.endsWith('index.html')))){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));return;
  }
  e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>hit||new Response('',{status:404}));
    return hit||net;
  })));
});
