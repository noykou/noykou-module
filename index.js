const { get } = require("superagent"),
baseURL = "https://noykou.glitch.me/api/v1";

module.exports = {

    /**
     * Call an endpoints and returns the image
     * @param {string} endpoint The endpoint to call
     * @param {object} options The call options
     * @returns {buffer}
     */
    async getImage(endpoint, options){
        return new Promise(async(resolve, reject) => {
            const { body } = await get(encodeURI(`${baseURL}/${endpoint}?username=${(options.username ? options.username.toLowerCase() : null)}&url=${options.url}&action=${options.action}&text=${options.text}&message=${options.message}&back=${options.back}&style=${options.style}&roundcolor=${options.roundcolor}&textcolor=${options.textcolor}`));
            resolve(body);
        });
    }

}