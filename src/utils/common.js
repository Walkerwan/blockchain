/**
 * 此文件为工具类， 与业务无关但比较常用的功能
 */

class CommonUtil {
    /**
     * 此函数为切换item改变样式所用
     * @param {*} targetNode
     * @param {*} parentNode
     */
    toggle(targetNode, parentsNode) {
        if(parentsNode && parentsNode.children && parentsNode.children.length > 0 ) {
            for(let index in parentsNode.children) {
                parentsNode.children[index].classList? parentsNode.children[index].classList.remove('active') : ''
            }
            targetNode.parentNode.classList.add('active')
        }
    }
}

export default new CommonUtil();