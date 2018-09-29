/**
 * 此文件为工具类， 与业务无关但比较常用的功能
 */

class CommonUtil {
    constructor() {
        let targetNode;
    }
    /**
     * 此函数为切换item改变样式所用
     * 使用此函数必须在父元素上设置id
     * @param {*} targetNode
     * @param {*} parentNode
     */
    toggle(targetNode, parentsNode) {
        if(parentsNode && parentsNode.children && parentsNode.children.length > 0 ) {
            for(let index in parentsNode.children) {
                parentsNode.children[index].classList? parentsNode.children[index].classList.remove('active') : ''
            }
            this.findParentNode(targetNode, parentsNode)
            if (this.targetNode) {
                this.targetNode.classList.add('active')
                this.targetNode = null;
            }
        }
    }

    /**
     * 递归匹配parentNode
     * @param {*} targetNode
     * @param {*} parentsNode
     */
    findParentNode(targetNode, parentsNode) {
        if (!targetNode.parentNode || (targetNode.parentNode.id && targetNode.parentNode.id === parentsNode.id)) {
            this.targetNode = targetNode
            return;
        }
        this.findParentNode(targetNode.parentNode, parentsNode)
    }
}

export default new CommonUtil();