const BaseRepository = require('./base.repository');
let _user = null,
  _credential = null,
  _role = null,
  _scope = null,
  _method = null,
  _module = null;

class UserRepository extends BaseRepository {
  constructor({ db }) {
    _user = db['User'];
    _role = db['Role'];
    _scope = db['Scope'];
    _method = db['Method'];
    _module = db['Module'];
    _credential = db['Credential'];
    super(_user);
  }

  async getRolesByUser(userId) {
    return await _role.findAll({
      attributes: ['name'],
      include: {
        attributes: [],
        model: _user,
        where: { id: userId },
      },
    });
  }

  async getScopesByUser(userId, method, module, fullAccess) {
    const {
      dataValues: { id: moduleId },
    } = await _module.findOne({ attributes: ['id'], where: { name: module } });

    const {
      dataValues: { id: methodId },
    } = await _method.findOne({ attributes: ['id'], where: { name: method } });

    return await _scope.findOne({
      include: {
        model: _role,
        include: {
          model: _user,
          where: { id: userId },
          required: true,
        },
        required: true,
      },
      where: { moduleId, methodId, fullAccess },
    });
    /* return await _user.findOne({
      include: {
        attributes: ['id', 'name'],
        model: _role,
        include: {
          model: _scope,
          required: false,
        },
        required: true,
      },
      where: { id: userId },
    }); */
    /* return await _db.sequelize.query(
      `SELECT "User"."id", "User"."name", "User"."lastname", "User"."phone", "User"."createdAt", "User"."updatedAt", "Roles"."id" AS 
      "Roles.id", "Roles"."name" AS "Roles.name", "Roles->UserRoles"."roleId" AS "Roles.UserRoles.roleId", "Roles->UserRoles"."userId" AS
       "Roles.UserRoles.userId", "Roles->UserRoles"."createdAt" AS "Roles.UserRoles.createdAt", "Roles->UserRoles"."updatedAt" AS 
       "Roles.UserRoles.updatedAt", "Roles->Scopes"."moduleId" AS "Roles.Scopes.moduleId", "Roles->Scopes"."methodId" AS 
       "Roles.Scopes.methodId", "Roles->Scopes"."fullAccess" AS "Roles.Scopes.fullAccess", "Roles->Scopes"."createdAt" AS 
       "Roles.Scopes.createdAt", "Roles->Scopes"."updatedAt" AS "Roles.Scopes.updatedAt", "Roles->Scopes->RoleScopes"."roleId" AS 
       "Roles.Scopes.RoleScopes.roleId", "Roles->Scopes->RoleScopes"."scopeId" AS "Roles.Scopes.RoleScopes.scopeId", 
       "Roles->Scopes->RoleScopes"."createdAt" AS "Roles.Scopes.RoleScopes.createdAt", "Roles->Scopes->RoleScopes"."updatedAt" AS 
       "Roles.Scopes.RoleScopes.updatedAt" FROM "Users" AS "User" INNER JOIN ( "UserRoles" AS "Roles->UserRoles" INNER JOIN "Roles" AS 
       "Roles" ON "Roles"."id" = "Roles->UserRoles"."roleId") ON "User"."id" = "Roles->UserRoles"."userId" LEFT OUTER JOIN ( "RoleScopes"
        AS "Roles->Scopes->RoleScopes" INNER JOIN "Scopes" AS "Roles->Scopes" ON "Roles->Scopes"."id" = 
        "Roles->Scopes->RoleScopes"."scopeId") ON "Roles"."id" = "Roles->Scopes->RoleScopes"."roleId" WHERE "User"."id" = ${userId};`,
      {
        model: [_scope, _role, _user],
        mapToModel: true, // pass true here if you have any mapped fields
      }
    ); */
  }

  async updateLastRefreshToken(userId, refresh_token) {
    return await _credential.update(
      { lastRT: refresh_token },
      {
        where: { userId },
        fields: ['lastRT'],
      }
    );
  }

  async getCredentials(userId) {
    return await _credential.findOne({
      attributes: ['lastRT'],
      where: { userId },
    });
  }

  async getCredentialsByEmail(email) {
    return await _credential.findOne({
      attributes: ['lengthpass', 'hashpass', 'userId'],
      where: { email },
    });
  }
}

module.exports = UserRepository;
