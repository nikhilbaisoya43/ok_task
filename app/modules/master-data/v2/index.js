const MasterManager = require('./masterManager');
const cacheInstance = require('../../../common/cache');

module.exports = class MasterController {

    async getMasterData(request, response) {
        try {
            if (cacheInstance.has(`${request.url}-${request.user.RoleId}-${JSON.stringify(request.body)}`)) {
                response.status(200).json({
                    success: true,
                    data: cacheInstance.get(`${request.url}-${request.user.RoleId}-${JSON.stringify(request.body)}`)
                })
            }
            else {
                const masterData = await new MasterManager().getMasterData(request.user.RoleId, request.body);
                cacheInstance.set(`${request.url}-${request.user.RoleId}-${JSON.stringify(request.body)}`, masterData);
                response.status(200).json({
                    success: true,
                    data: masterData
                })
            }
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not fetch Master Data " + error
            })
        }
    }
}