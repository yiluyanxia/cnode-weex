let utilFunc = {
  initIconFont() {
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      "fontFamily": "iconfont",
      "src": "url('http://at.alicdn.com/t/font_664871_sdaeeyacbvg0t3xr.ttf')"
    });
  }
};
export default utilFunc;