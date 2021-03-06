class DeviceUtil {
    constructor(t) {
        this.systemInfo = t
    }
    px2rpx(t) {
        return 750 / this.systemInfo.windowWidth * t
    }
    rpx2px(t) {
        return this.systemInfo.windowWidth / 750 * t
    }
    getNavigationBarHeight() {
        return this.getTitleBarHeight() + this.getStatusBarHeight()
    }
    getStatusBarHeight() {
        return this.px2rpx(this.systemInfo.statusBarHeight)
    }
    getTitleBarHeight() {
        const t = this.systemInfo.statusBarHeight,
            e = wx.getMenuButtonBoundingClientRect(),
            i = e.top - t;
        return this.px2rpx(2 * i + e.height)
    }
}
const deviceUtil = new DeviceUtil(wx.getSystemInfoSync());
export default deviceUtil;