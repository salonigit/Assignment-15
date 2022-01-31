const db = require("../models");
const Tutorial = db.tutorials;

const addTutorialService = async (tutorial) => {
    await Tutorial.create({
        title: tutorial.title,
        description: tutorial.description,
    })
    return "Sucessfull"
}

export default addTutorialService