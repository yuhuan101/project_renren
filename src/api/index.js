import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as schedule from './modules/schedule'
import * as goods from './modules/goods'
import * as applist from './modules/applist'
import * as agentdept from './modules/agentdept'
import * as appdetail from './modules/appdetal'
import * as alilivenumbers from './modules/alilivenumbers'
import * as dmslivenumbers from './modules/dmslivenumbers'
import * as roomlist from './modules/roomlist'
import * as companymanager from './modules/companymanager'
import * as sumcompanymanager from './modules/sumcompanymanager'

export default {
    common, // 公共
    user, // 管理员管理
    role, // 角色管理
    menu, // 菜单管理
    log, // 系统日志
    config, // 参数管理
    oss, // 文件服务
    goods, // 商品管理
    applist,
    agentdept, // 代理管理
    companymanager, // 公司管理
  sumcompanymanager, // 总公司管理
    roomlist, // 房间管理
    alilivenumbers, // 数据统计
    dmslivenumbers, // dms数据统计
    appdetail,
    schedule // 定时任务
}
