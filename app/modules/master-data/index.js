const MasterManager = require('./masterManager');
const cacheInstance = require('../../common/cache');

module.exports = class MasterController {

    async getMasterData(request, response) {
        try {
            // if (cacheInstance.has(`${request.url}-${request.query.client}-${request.query.location}-${request.query.role}`)) {
            //     response.status(200).json({
            //         success: true,
            //         data: cacheInstance.get(`${request.url}-${request.query.client}-${request.query.location}-${request.query.role}`)
            //     })
            // }
            // else {
                const masterData = await new MasterManager().getMasterData(request.query.client, request.query.location, request.query.role);
                cacheInstance.set(`${request.url}-${request.query.client}-${request.query.location}-${request.query.role}`, masterData);
                response.status(200).json({
                    success: true,
                    data: masterData
                })
            // }
        } catch (error) {
            console.log(error)
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            })
        }
    }
}