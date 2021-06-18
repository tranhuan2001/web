import {logger2} from "./logger/index.js"
import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './logger/logger.js'

logger2('Message', TYPE_LOG)
logger2('Message', TYPE_WARN)
logger2('Message', TYPE_ERROR)