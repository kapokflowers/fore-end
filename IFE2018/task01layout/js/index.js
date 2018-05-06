/*返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList 。
保存所有的选项卡和所有的面板引用到两个变量中*/
var tabs = document.querySelectorAll(".info-box li a");
var panels = document.querySelectorAll(".info-box article");

/* for循环遍历所有的选项卡，并且在每一个上运行叫做setTabHandler() 的函数*/
for(i = 0; i < tabs.length; i++){
    var tab = tabs[i];
    setTabHandler(tab, i);
}

/*此函数建立当每个选项卡被点击时应该发生的功能，运行时,函数会被传递选项卡，
和一个索引数i指明选项卡在tabs 数组中的位置。
一个for循环清除所有标签当前存在的类
当点击的时候在标签上创建了一个active 类——从相关联的元素中继承了CSS的一些属性，具有和panels的样式相同的颜色，背景颜色。
一个for循环用开清除所有面板当前存在的类
当标签被点击的时候在和标签相对应的面板上创建了一个active-panel 类——从相关联的元素中继承了CSS的一些属性，使他的z-index属性被设置为1，让他能位于所有的面板的上面。*/
function setTabHandler(tab,tabPos){
    tab.onclick = function(){
        for(i = 0; i < tabs.length; i++){
            /*getAttribute() 方法返回指定属性名的属性值。*/
            if(tabs[i].getAttribute("class")){
                tabs[i].removeAttribute("class");
            }
        }
        /*setAttribute() 方法添加指定的属性，并为其赋指定的值。*/
        tab.setAttribute("class","active");
        
        for(i = 0; i < panels.length;i++){
            if(panels[i].getAttribute("class")){
                panels[i].removeAttribute("class");
            }
        }
        panels[tabPos].setAttribute("class","active-panel");
    }
}