let prizes = [
    {
        type: 0,
        count: 1,
        title: '森海塞尔耳机',
        img: '../img/1.jpg'
    }, {
        type: 1,
        count: 1,
        title: '森海塞尔耳机',
        img: '../img/1.jpg'
    }, {
        type: 2,
        count: 1,
        title: '罗技机械键盘',
        img: '../img/2.jpg'
    },
    {
        type: 3,
        count: 1,
        title: '黄金转运珠手链',
        img: '../img/3.jpg'
    },
    {
        type: 4,
        count: 1,
        title: '小米平衡车',
        img: '../img/4.jpg'
    },
    {
        type: 5,
        count: 1,
        title: 'RealForce 燃风键盘',
        img: '../img/5.jpg'
    }, {
        type: 6,
        title: 'Prada 卡包',
        count: 1,
        img: '../img/6.jpg'
    }, {
        type: 7,
        title: 'Bose 智能音频眼镜蓝牙耳机',
        count: 1,
        img: '../img/7.jpg'
    }, {
        type: 8,
        title: '傲胜 按摩椅垫',
        count: 2,
        img: '../img/8.jpg'
    }, {
        type: 9,
        title: '外交官 行李箱',
        count: 3,
        img: '../img/9.jpg'
    }, {
        type: 10,
        title: '红包',
        count: 15,
        img: '../img/10.jpg'
    }, {
        type: 11,
        title: '红包',
        count: 15,
        img: '../img/10.jpg'
    }
];

/**
 * 一次抽取的奖品个数
 * 顺序为：[特别奖，一等奖，二等奖，三等奖，四等奖，五等奖，六等奖]
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5];

const COMPANY = '';
const ROW_COUNT = 7;
const COLUMN_COUNT = 17;


/**
 * 高亮矩阵
 */
// 2019
// const HIGHLIGHT_CELL = ['1-1', '1-2', '1-3', '2-3', '3-1', '3-2', '3-3', '4-1', '5-1', '5-2', '5-3', '1-5', '1-6', '1-7', '2-5', '2-7', '3-5', '3-7', '4-5', '4-7', '5-5', '5-6', '5-7', '1-10', '2-9', '2-10', '3-10', '4-10', '5-9', '5-10', '5-11', '1-13', '1-14', '1-15', '2-13', '2-15', '3-13', '3-14', '3-15', '4-15', '5-13', '5-14', '5-15'];
// 2020
const HIGHLIGHT_CELL = ['1-1', '1-2', '1-3', '2-3', '3-1', '3-2', '3-3', '4-1', '5-1', '5-2', '5-3', '1-5', '1-6', '1-7', '2-5', '2-7', '3-5', '3-7', '4-5', '4-7', '5-5', '5-6', '5-7', '1-9', '1-10', '1-11', '2-11', '3-9', '3-10', '3-11', '4-9', '5-9', '5-10', '5-11', '1-13', '1-14', '1-15', '2-13', '2-15', '3-13', '3-15', '4-13', '4-15', '5-13', '5-14', '5-15'];

module.exports = {
    prizes,
    EACH_COUNT,
    ROW_COUNT,
    COLUMN_COUNT,
    COMPANY,
    HIGHLIGHT_CELL
};