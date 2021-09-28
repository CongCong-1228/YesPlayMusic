import { app } from 'electron'
import logger from 'electron-log'

logger.transports.file.level = app.isPackaged ? 'info' : 'debug'
logger.info(`\n\n██╗   ██╗███████╗███████╗██████╗ ██╗      █████╗ ██╗   ██╗███╗   ███╗██╗   ██╗███████╗██╗ ██████╗
╚██╗ ██╔╝██╔════╝██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝████╗ ████║██║   ██║██╔════╝██║██╔════╝
 ╚████╔╝ █████╗  ███████╗██████╔╝██║     ███████║ ╚████╔╝ ██╔████╔██║██║   ██║███████╗██║██║     
  ╚██╔╝  ██╔══╝  ╚════██║██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██║╚██╔╝██║██║   ██║╚════██║██║██║     
   ██║   ███████╗███████║██║     ███████╗██║  ██║   ██║   ██║ ╚═╝ ██║╚██████╔╝███████║██║╚██████╗
   ╚═╝   ╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝\n`)

export default logger
