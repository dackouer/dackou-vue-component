import FingerprintJS from '@fingerprintjs/fingerprintjs'

export async function setupFingerprint(){
    const fp = await FingerprintJS.load()
    const result = await fp.get()
    localStorage.setItem('visitorid',result.visitorId)
    return result.visitorId
}