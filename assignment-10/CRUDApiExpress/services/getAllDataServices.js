import db from "../models";
const user = db.users;

const getAllDataService = async () => {
  const result = await user.findAll()
  return result
}

export default getAllDataService