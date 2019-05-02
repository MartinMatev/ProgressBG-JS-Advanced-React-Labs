let code = `<div 
class="top_links">
      <a class="home_link" href="/ProgressBG-JS-Advanced_React/index.html#Course_Intro" target="_top"><i class="fa fa-home"></i></a>
      <span class="help_link" href="#"><i class="fa fa-question"></i></span>
      <!-- ala>bala -->
        <div><span>N/Спейс</span><span>Next Slide</span></div>
        <div><span>P</span><span>Previous Slide</span></div>
        <div><span>O</span><span>Slides Overview</span></div>
        <div><span>ctrl+left click</span><span>Zoom Element</span></div>
      </div>      
    </div>`

let tagRe1 = /<.+?>/g;
let tagRe2 = /<[^>]+>/g;

let res = code.match(tagRe2);
console.log(res);

