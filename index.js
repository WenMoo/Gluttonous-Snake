



//获取到地图
let map  = document.getElementById('gameBox');
//定义初始化的蛇

// 初始化蛇，初始为3个小点为一个蛇，这里蛇就用数组就好了，因为只涉及头尾
let body = [{x:2, y:0}, {x:1, y:0}, {x:0, y:0}];
let direction = 'right';

    // 创建和显示蛇
function showSnake(){
    // 设置蛇的宽、高、默认走的方向
    this.width = 20;
    this.height = 20;



    for (let i = 0; i < body.length; i++) {
            if (body[i].x != null) {   // 当吃到食物时，x==null，不能新建，不然会在0，0处新建一个
                let s = document.createElement('div');
                // 将节点保存到状态中，以便于后面删除
                body[i].flag = s;
                // 设置蛇的样式
                s.style.width = this.width + 'px';
                s.style.height = this.height + 'px';
                s.style.background = "#24292E"
                s.style.borderRadius = 6 + "px";
                // 设置蛇的位置，这里的两个300是设置蛇的起始位置
                s.style.position = 'absolute';
                s.style.left = body[i].x * this.width + 'px';
                s.style.top = body[i].y * this.height + 'px';
                // 添加进去
                map.appendChild(s);
            }
        }
    }

showSnake()

//思路：把最后一个点移到第一个点，因为移动就是后面的一个点移动到前面的点的位置
function move() {
    // 后一个元素到前一个元素的位置
    for (let i= body.length-1; i>0; i--) {
        body[i].x = body[i-1].x;
        body[i].y = body[i-1].y;
    }

    // 根据方向处理蛇头
    switch(direction)
    {
        case "left":
            body[0].x -= 1;
            break;
        case "right":
            body[0].x += 1;
            break;
        case "up":
            body[0].y -= 1;
            break;
        case "down":
            body[0].y += 1;
            break;
    }
    //删除之前的蛇
    for (let i=0; i<body.length; i++) {
        if (body[i].flag != null) {   // 当吃到食物时，flag是等于null，且不能删除
            map.removeChild(body[i].flag);
        }
    }
    //调用显示蛇的方法，显示蛇
    showSnake()

}

move()