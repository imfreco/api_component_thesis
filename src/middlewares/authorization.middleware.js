const { UserRepository } = require('../repositories');
const db = require('../models');
const { generateErrorHelper } = require('../helpers');

module.exports = async (req, res, next) => {
  const _userRepository = new UserRepository({ db });
  const user = res.locals.user;

  if (!user) {
    //Something has gone wrong
    generateErrorHelper(500, 'Something has gone wrong');
  }

  //getting information of endpoint
  const method = req.method.toLowerCase();
  const reqBaseUrl = req.baseUrl;
  const model = reqBaseUrl.split('/').pop();
  let fullAccess = true;
  let param = '';
  const reqPathRoute = req.route.path;
  if (reqPathRoute) {
    param = reqPathRoute.replace('/', '');
    if (param) fullAccess = false;
  }

  // search if exists scope for this user
  const hasScope = await _userRepository.getScopesByUser(
    user,
    method,
    model,
    fullAccess
  );

  // console.log(user, method, model, fullAccess);

  if (hasScope) next();
  else generateErrorHelper(401, 'No tiene permiso para acceder a este recurso');
};
