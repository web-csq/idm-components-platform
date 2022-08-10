export default {
    data() {
        return {
            _scrollingElement: null,
            _isReachBottom: false,
            reachBottomDistance: 80, // 距离底部多远触发
        }
    },
    mounted() {
        this._scrollingElement = document.scrollingElement
        window.addEventListener('scroll', this._windowScrollHandler)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this._windowScrollHandler)
    },
    methods: {
        /**
         * 触底事件，触发reachBottom
         * @returns void
         */
        _windowScrollHandler() {
            let scrollHeight = this._scrollingElement.scrollHeight
            let currentHeight =
                this._scrollingElement.scrollTop +
                this._scrollingElement.clientHeight +
                this.reachBottomDistance
            if (currentHeight < scrollHeight && this._isReachBottom) {
                this._isReachBottom = false
            }
            if (this._isReachBottom) {
                return
            }
            if (currentHeight >= scrollHeight) {
                this._isReachBottom = true
                typeof this.reachBottom === 'function' && this.reachBottom()
            }
        },
    },
}
