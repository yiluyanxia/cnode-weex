let utilFunc = {
  initIconFont() {
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      "fontFamily": "iconfont",
      "src": "url('http://at.alicdn.com/t/font_664871_ewqo8n8p1tlf2yb9.ttf')"
    });
  },


  matchTab(tab, top, good, isClass, className) {
    let tabs_dict = ["分享", "问答", "招聘"];
    let tabs_index = ["share", "ask", "job"];
    let tabName = "";
    let class_Name = className ? className : "light";
    if (top) {
      tabName = "置顶";
    } else if (good) {
      tabName = "精华";
    } else {
      class_Name = '';
      tabName = tabs_dict[tabs_index.indexOf(tab)];
    }
    return isClass ? class_Name : tabName;
  }


};
export default utilFunc;