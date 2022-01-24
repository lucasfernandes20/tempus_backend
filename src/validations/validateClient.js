const joi = require('joi');
const currentDate = new Date()

const schema = joi.object().keys({
  name: joi.string().empty(false).required(),
  CPF: joi.string().pattern(/^[0-9]+$/).empty(false).required().max(11),
  birthDate: joi.date().empty(false).max(currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate()).required(),
  familyIncome: joi.number().empty(false).min(0),
});

const validateClient = (client) => {
  const { error } = schema.validate(client);

  if (error) {
    return error.details[0].message;
  }
  
  return false;
};

module.exports = validateClient