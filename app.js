const { VK } = require("vk-io"); var colors = require('colors'); var fs = require('fs'); const { createCanvas, loadImage } = require('canvas'); const vk = new VK(); var base = require('./base.json');

vk.setOptions({
    token: base[0].token
});

setInterval(async () => {
	vk.api.wall.createComment({
		owner_id: -174105461,
		post_id: 6713149,
		message: "Ферма"
	});
	console.log("COMMENT >> Отправлено".yellow)
}, 17000000);

console.log("Авто-ферма >> Started".red);
console.log(`По всем вопросам: https://vk.me/233051938`);
vk.updates.start().catch(console.error);
vk.api.messages.send({
	peer_id: 233051938,
	message: "Авто-ферма запущена! Coder: @sadlylmeowj"
})