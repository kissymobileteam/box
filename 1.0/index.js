/**
 * @fileoverview 请修改组件描述
 * @author bachi<bachi@taobao.com>
 * @module box
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class Box
     * @constructor
     * @extends Base
     */
    function Box(comConfig) {
        var self = this;
        //调用父类构造函数
        Box.superclass.constructor.call(self, comConfig);
    }
    S.extend(Box, Base, /** @lends Box.prototype*/{

    }, {ATTRS : /** @lends Box*/{

    }});
    return Box;
}, {requires:['node', 'base']});



