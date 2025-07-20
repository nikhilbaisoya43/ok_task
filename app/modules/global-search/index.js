const GlobalSearchManager = require('./globalSearchManager');

module.exports = class GraphController {

    async getGlobalSearchRecords(request, response) {
        try {
            const data = await new GlobalSearchManager().getGlobalSearchRecords(request.body, request.user.id, request.user.RoleId)
            if (!data) {
                throw new Error('Records not found');
            }
            response.status(200).json({
                success: true,
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: 'Could not fetch records',
                error: error
            })
        }
    }
}