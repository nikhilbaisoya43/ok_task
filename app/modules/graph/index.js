const GraphMaster = require('./graphMaster');

module.exports = class GraphController {

    async getAllocatedStatistics(request, response) {
        try {
            const allocatedStatisticsData = await new GraphMaster().getAllocatedStatistics(request.body);
            response.status(200).json({
                success: true,
                data: allocatedStatisticsData
            })
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not display allocated statistics Data " + error
            })
        }
    }

    async getUnallocatedVolume(request, response) {
        try {
            const unallocatedStatisticsData = await new GraphMaster().getUnallocatedVolume(request.body);
            response.status(200).json({
                success: true,
                data: unallocatedStatisticsData
            })
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not display unallocated statistics Data " + error
            })
        }
    }

    async getProductivity(request, response) {
        try {
            const getProductivity = await new GraphMaster().getProductivity(request.body);
            response.status(200).json({
                success: true,
                data: getProductivity
            })
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not display data",
                error: error.message
            })
        }
    }
}