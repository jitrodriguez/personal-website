import './index.css'
import { useOSStore } from './store/useOSStore'
import { useIsMobile } from './hooks/useIsMobile'
import { BootScreen } from './components/BootScreen/BootScreen'
import { Desktop } from './components/desktop/Desktop/Desktop'
import { MobileOS } from './components/mobile/MobileOS'
import { Notification } from './components/Notification/Notification'

function App() {
  const booted = useOSStore((s) => s.booted)
  const isMobile = useIsMobile()

  return (
    <>
      {!booted && <BootScreen />}
      {booted && (isMobile ? <MobileOS /> : <Desktop />)}
      <Notification />
    </>
  )
}

export default App
