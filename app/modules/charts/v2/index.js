const ChartManager = require("./chartManager");
module.exports = class ChartController {

  async getUserWorklistStats(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getUserWorklistStats(request.user)
      if (!data) {
        throw new Error('Returned Empty');
      }
      response.status(200).json({
        success: true,
        message: "Displayed successfully",
        data: data
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }
};
