import db from '../models'
const Tutorial = db.tutorials;

const getTutorialsService = async (tutorialId) => {
  const result = await Tutorial.findByPk(tutorialId, { include: ["comments"] })
  return result
}

export default getTutorialsService
