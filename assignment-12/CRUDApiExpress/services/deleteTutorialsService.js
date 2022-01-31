const db = require("../models");
const Tutorials = db.tutorials;

const deleteTutorialsService = async (id) => {
    await Tutorials.destroy({
        where: { id: id }
    })
    return "Deleted Successfull"
}

export default deleteTutorialsService