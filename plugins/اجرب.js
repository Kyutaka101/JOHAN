const API = "https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=0a637f457396bf3dcc21243b&text="

module.exports.config = {
    name: "دخان",
    version: "1.0.1",
    hasPermssion: 0,
  credits: "S H A D O W",
    description: "يجيبلك اسمك او منشنك فلوجو دخان",
  commandCategory: "الــتــرفــيــه والــالــعــاب",
    usages: "TEXT",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "رد ع الرساله") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("جارٍ إنشاء الصور، يرجى الانتظار", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `...`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {


            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`ضيف نص او منشن`, event.threadID, event.messageID);
        })
};