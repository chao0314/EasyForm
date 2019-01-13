export default {
  begin: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>EasyForm</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 100px;
      display: flex;
      justify-content: center;
    }

    body {
      font-size: 16px;
    }

    .header {
      color: white;
    }

    .header > p {
      text-align: center;
      background: #5B90CF;
    }

    .header > p:first-child {
      min-height: 0.48rem;
      font-size: 24px;
    }

    .header > p:first-child label {
      vertical-align: middle;
    }

    .container {
      min-height: calc(100% - 0.48rem - 0.92rem);
      padding: 0 5px;
    }

    .base-widget {
      padding: 0 10px 10px;
      font-size: 16px;
    }

    .base-widget-p {
      font-size: 16px;
      text-align: left;
    }

    .base-widget-p:first-child {
      height: 0.24rem;
      line-height: 0.24rem;
    }

    .base-widget-p:nth-child(2) {
      font-size: 14px;
    }

    .single-text > input {
      width: 100%;
      height: 0.38rem;
      font-size: 14px;
      background: white;
      border: 1px solid silver;
    }

    .multi-text > textarea {
      width: 100%;
      display: block;
      font-size: 14px;
      background: white;
      border: 1px solid silver;
    }

    .select > select {
      width: 100%;
      height: 0.24rem;
    }

    .time > div > input {
      width: 15%;
      height: 0.28rem;
      border: 1px solid silver;
      border-radius: 4px;
    }

    .footer {
      text-align: center;
      color: white;
      z-index: 1;
    }

    .footer > button {
      width: 0.96rem;
      height: 0.32rem;
      background: orange;
      border: 0;
      border-radius: 2px;
      color: white;
    }

    .footer > button:active {
      box-shadow: inset 1px 1px 1px black;
    }

    .footer > div {
      height: 0.6rem;
      background: #364760;
      margin-top: 20px;
      line-height: 0.6rem;
    }

    .footer > div > img {
      height: 100%;
    }

    /*date picker*/
    .date_picker {
      position: relative;
    }

    .date_picker > div:first-child {
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }

    .date_picker > div:first-child > input {
      height: 0.32rem;
      border: 1px solid silver;
      border-right: none;
      background: white;
      width: calc(100% - 0.32rem);
    }

    .date_picker > div:first-child > img {
      display: inline-block;
      width: 0.32rem;
      height: 0.32rem;
      border: 1px solid silver;
      border-left: none;
    }

    /*calendar*/

    .calendar {
      width: 100%;
      display: none;
      position: absolute;
      z-index: 99;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .calendar ul {
      list-style-type: none;
    }

    .month {
      background: #00B8EC;
    }

    .month ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
    }

    .year-month {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .year-month:hover {
      background: rgba(150, 2, 12, 0.1);
    }

    .choose-year {
      padding: 0 2px;
    }

    .choose-month {
      text-align: center;
      font-size: 0.16rem;
    }

    .arrow {
      padding: 10px;
    }

    .arrow:hover {
      background: rgba(100, 2, 12, 0.1);
    }

    .month ul li {
      color: white;
      font-size: 0.16px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .weekdays {
      margin: 0;
      padding: 5px 0;
      background-color: #00B8EC;
      display: flex;
      flex-wrap: wrap;
      color: #FFFFFF;
      justify-content: space-around;
    }

    .weekdays li {
      display: inline-block;
      width: 13.6%;
      text-align: center;
    }

    .days {
      padding: 0;
      background: #FFFFFF;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .days li {
      list-style-type: none;
      display: inline-block;
      width: 14.2%;
      /*height: 50%;*/
      text-align: center;
      padding: 2px 0;
      font-size: 0.16rem;
      color: #000;
    }

    .days li .active {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #00B8EC;
      color: #fff;
    }

    .days li .other-month {
      padding: 5px;
      color: gainsboro;
      /*color: red;*/
    }

    .days li:hover {
      background: #e1e1e1;
    }

    /*calendar*/
    /*date picker*/
  </style>
</head>
<body>`,
  header: `<div class="header">
  <p><span>{{title}}</span></p>
  <p>{{description}}</p>
</div>
<div class="container">`,
  footer: `</div>
<div class="footer">
  <button>提交</button>
  <div><img
    src="data:image/png;base64,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"
    alt="EasyForm"></div>
</div>

</body>`,
  over: `<script>
  document.addEventListener("DOMContentLoaded", function () {
       Object.prototype.css = function css(name, value) {
        if (value) {
          this.style[name] = value;
          return this;
        } else if (name) {
          return window.getComputedStyle(this, null).getPropertyValue(name);
        } else {
          return window.getComputedStyle(this, null);
        }

      };
      var $ = document.querySelectorAll.bind(this);
      var $create = document.createElement.bind(this);
      var html = $("html")[0];
      var scale = html.clientWidth / 375 > 1.5 ? 1.5 : html.clientWidth / 375;
      html.style.fontSize = 100 * scale * 0.8 + "px";
      $("body")[0].style.width = 375 * scale + "px";
      if (html.clientHeight > html.offsetHeight) {
        $(".footer")[0].css("position", "fixed").css("bottom", "0").css("width", 375 * scale + "px");
      }
      var types = ["single", "multi", "radio", "checkbox", "select", "time", "date"];
      var elements = {};
      createDatePicker(".date_picker");
      for (var i = 0; i < types.length; i++) {
        elements[types[i]] = getArray($(".comp-" + types[i]));
      }
      $(".footer > button")[0].addEventListener("click", function () {
        var answer = getAnswer();
        if (answer.allin) {
          var that = this;
          this.setAttribute("disabled", "disabled");
          this.css("background", "silver");
          ajax({
            method: "post",
            url: "http://168.168.5.103:8080/easyform/saveinstanceresult",
            data: answer,
            success: function () {
              alert("提交成功");
            },
            fail: function () {
              alert("提交失败");
              that.removeAttribute("disabled");
              that.css("background", "orange");
            }
          })
        }

      });
      function getArray(like) {
        var result = [];
        for (var i = 0; i < like.length; i++) {
          result.push(like[i]);
        }
        return result;
      }

      function createDatePicker(selector, init) {
        var $ = $ || document.querySelectorAll.bind(document);
        var $create = $create || document.createElement.bind(document);
        var pickers = $(selector);
        var i;

        if (pickers.length === 0) return;
        for (i = 0; i < pickers.length; i++) {
          var temp = pickers[i];
          initDate(temp.querySelector(".calendar > .days"), init);
          temp.children[0].addEventListener("click", function () {
            var oCalendar = temp.querySelector(".calendar");
            if (oCalendar.css("display") === "none") {
              oCalendar.css("display", "block");
            } else {
              oCalendar.css("display", "none");
            }
          });
          temp.querySelector(".year-pre").addEventListener("click", function () {
            switchDate(this, "yearPre");
          });
          temp.querySelector(".year-next").addEventListener("click", function () {
            switchDate(this, "yearNext");
          });
          temp.querySelector(".month-pre").addEventListener("click", function () {
            switchDate(this, "monthPre");
          });
          temp.querySelector(".month-next").addEventListener("click", function () {
            switchDate(this, "monthNext");
          });
        }

        function initDate(parent, init) {
          var now,
            current,
            year,
            month,
            day,
            week,
            formatDate,
            fragment,
            i, j;
          now = new Date();
          current = init === void 0 ? new Date() : new Date(init);
          formatDate = format(current.getFullYear(), current.getMonth() + 1, 1);
          current = new Date(formatDate);
          year = current.getFullYear();
          month = current.getMonth() + 1;
          day = current.getDate();
          week = current.getDay() === 0 ? 7 : current.getDay();
          fragment = document.createDocumentFragment();
          parent.parentNode.querySelector(".choose-year").innerHTML = year;
          parent.parentNode.querySelector(".choose-month").innerHTML = month + "月";

          for (i = 1; i <= week; i++) {
            var tempi = new Date(formatDate);
            tempi.setDate(tempi.getDate() - week + i);
            createDay(tempi);
          }
          for (j = 1; j <= 42 - week; j++) {
            var tempj = new Date(formatDate);
            tempj.setDate(tempj.getDate() + j);
            createDay(tempj);
          }
          parent.innerHTML = "";
          parent.appendChild(fragment);

          function createDay(date) {
            var temp = date;
            var oSpan = $create("span");
            var oLi = $create("li");
            oSpan.innerHTML = temp.getDate();
            oLi.appendChild(oSpan);
            if (temp.getFullYear() === now.getFullYear() && temp.getMonth() + 1 === now.getMonth() + 1 && temp.getDate() === now.getDate()) {
              oSpan.className = oSpan.className + " active";
            }
            if (temp.getMonth() + 1 !== month) {
              oSpan.className = oSpan.className + " other-month";
            }
            oLi.setAttribute("data-date", format(temp.getFullYear(), temp.getMonth() + 1, temp.getDate()));
            oLi.addEventListener("click", pickDate);
            fragment.appendChild(oLi);
          }

        }

        function pickDate(e) {
          var temp = this.parentNode.parentNode.parentNode;
          temp.querySelector("input").setAttribute("value", e.currentTarget.getAttribute("data-date"));
          temp.querySelector(".calendar").css("display", "none");

        }

        function switchDate(context, type) {
          var year = parseInt(context.parentNode.querySelector(".choose-year").innerHTML),
            month = parseInt(context.parentNode.querySelector(".choose-month").innerHTML);
          date = new Date(format(year, month, 1));
          switch (type) {
            case "yearPre" :
              date.setFullYear(--year);
              break;
            case "yearNext":
              date.setFullYear(++year);
              break;
            case  "monthPre":
              date.setDate(0);
              break;
            case  "monthNext":
              date.setDate(35);
              break;
            default:
              break;
          }
          initDate(context.parentNode.parentNode.parentNode.querySelector(".days"), format(date.getFullYear(), date.getMonth() + 1, 1));
        }

        function format(year, month, day) {
          var m = Number(month) > 9 ? month : "0" + month,
            d = Number(day) > 9 ? day : "0" + day;
          return year + "-" + m + "-" + d;
        }

      }

      function getAnswer() {
        var id = window.location.pathname.split("/").pop();
        var answer = {id, allin: true};
        var typeValue = {
          "single": function getSingeleValue(element) {
            return element.querySelector("input").value;
          },
          "multi": function getMultiValue(element) {
            return element.querySelector("textarea").value;
          },
          "radio": function getRadioValue(element) {
            var radios = element.querySelectorAll("input[type='radio']");
            for (var i = 0; i < radios.length; i++) {
              if (radios[i].checked) {
                return radios[i].value;
              }
            }
            return "";
          },
          "checkbox": function getCheckboxValue(element) {
            var checkboxs = element.querySelectorAll("input[type='checkbox']");
            var value = [];
            for (var i = 0; i < checkboxs.length; i++) {
              if (checkboxs[i].checked) {
                value.push(checkboxs[i].value);
              }
            }
            return value.join(",");
          },
          "select": function getSelectValue(element) {
            return element.querySelector("select").value;
          },
          "time": function getTime(element) {
            var hour = element.querySelector("input[name='hour']").value;
            var minute = element.querySelector("input[name='minute']").value;
            if (!hour || !minute) return "";
            hour = Number(hour) > 9 ? hour : "0" + hour;
            minute = Number(minute) > 9 ? minute : "0" + minute;
            return hour + ":" + minute;
          },
          "date": function getDate(element) {
            return element.querySelector("input").value;
          }
        };
        for (var i = 0; i < types.length; i++) {
          answer[types[i]] = {};
        }
        for (var prop in elements) {
          if (elements.hasOwnProperty(prop)) {
            for (var j = 0; j < elements[prop].length; j++) {
              var element = elements[prop][j];
              handler(prop, element, typeValue[prop](element));
            }
          }
        }
        return answer;

        function handler(prop, element, value) {

          if (element.getAttribute("data-required") === "true" && !value) {
            element.css("border", "1px solid red");
            answer.allin = false;
            // alert("标红表单不能为空");
          } else {
            answer[prop][element.getAttribute("data-number")] = {
              title: element.getAttribute("data-title"),
              value: value
            }

          }

        }

      }

      function ajax(options) {
        if (!options || JSON.stringify(options) === "{}") return;
        var xhr = (function () {
          if (XMLHttpRequest !== void 0) {
            return new XMLHttpRequest();
          } else if (ActiveXObject !== void 0) {
            var version = [
              'MSXML2.XMLHttp.6.0',
              'MSXML2.XMLHttp.3.0',
              'MSXML2.XMLHttp'
            ];
            for (var i = 0; i < version.length; i++) {
              try {
                return new ActiveXObject(version[i]);
              } catch (e) {
                //console.log(e);
              }
            }
          } else {
            throw new Error("os or broswer don't support XHR");
          }
        })();
        options.method = (options.method || "get").toLowerCase();
        options.url = options.url + '?rand=' + Math.random();
        // options.data = (function (data) {
        //   var arr = [];
        //   for (var i in data) {
        //     if (data.hasOwnProperty(i)) {
        //       arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        //     }
        //   }
        //   return arr.join("&");
        // })(options.data);
        if (options.method === 'get') {
          if (Array.isArray(options.data)) {
            options.data = (function (data) {
              var arr = [];
              for (var i in data) {
                if (data.hasOwnProperty(i)) {
                  arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
                }
              }
              return arr.join("&");
            })(options.data);
          }
          options.url += (options.url.indexOf('?') === -1 ? '?' + options.data : '&' + options.data);
        }
        options.async = options.async || true;
        if (options.async === true) {
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              callback();
            }
          }
        }
        // console.log("method", options.method, "url", options.url, "data", options.data);
        xhr.open(options.method, options.url, options.async);
        if (options.method === "post") {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify(options.data));
        } else {
          xhr.send(null);
        }
        if (options.async === false) {
          callback();
        }

        function callback() {
          if (xhr.status === 200) {
            if (options.success && typeof options.success === "function") {
              options.success(xhr.responseText);
            }

          } else if (options.fail && typeof options.fail === 'function') {
            options.fail(xhr.status);
          }
        }
      }


    }
  )
</script>
</html>`,
  SingleText: `<div class="base-widget single-text comp-single"  data-title="{{name}}" data-required="{{validate.required}}"   data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    <input type="text" placeholder="{{defaultValue}}">
  </div>`,
  MultiText: `<div class="base-widget multi-text comp-multi"  data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    <textarea rows="3" placeholder="{{defaultValue}}"></textarea>
  </div>`,
  Radio: ` <div class="base-widget comp-radio"  data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    {{each options}}
    <div>
      <input type="radio" name="{{name}}" value="{{$value.value}}" id="{{number}}-{{$index}}"><label for="{{number}}-{{$index}}">{{$value.value}}</label>
    </div>
    {{/each}}
</div>`,
  CheckBox: `<div class="base-widget comp-checkbox" data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    {{each options}}
     <div>
      <input type="checkbox" name="{{name}}" value="{{$value.value}}" id="{{number}}-{{$index}}"><label
      for="{{number}}-{{$index}}">{{$value.value}}</label>
    </div> 
    {{/each}}  
   </div>`,
  Select: `<div class="base-widget select comp-select" data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    <select>
      <option value="">请选择</option>
      {{each options}}
      <option value="{{$value.value}}">{{$value.value}}</option>
      {{/each}}
    </select>
    </div>`,
  Time: ` <div class="base-widget time comp-time" data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    <div>
      <input type="number" name="hour" value="{{defaultValue.substring(0, 2)}}">
      <span>:</span>
      <input type="number" name="minute" value="{{defaultValue.substring(3)}}">
    </div>
  </div>`,
  Date: `<div class="base-widget comp-date" data-title="{{name}}" data-required="{{validate.required}}" data-number="{{number}}">
    <p class="base-widget-p">{{name}}</p>
    <P class="base-widget-p">{{description}}</P>
    <div class="date_picker">
      <div>
        <input type="text" disabled value="{{defaultValue}}"><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACS0lEQVR4Xu1bwVLCMBDdVTwLfIAiI/yG+iVyBfTsRUec0Rl/wHKFL9HvsAfoDwDe0XVEYWgpNUmzmdJur03yNi9v96Vpi1DwCws+fxACRAEFZ8BaCpT7/jkQ0IJPLAWz9smYk9uy55+txk+BZ42Aquf/Tv7nIniYdBs9TgJs4QkBtlbJ1oqoxmMLb0MBFc9/VQmCiIazbnOwbLseEAGNAdBqDbCFN+00Ltbnt0FAiNkkJiJ5rtxPhd24NpbwJp1GaM5CQJTskJQJAkCIlTIRDbamQEI/YwGY4hHUEOF4iaunAA07s1WUVAlSxau++D1AuBcC/hgQBWgVQY0UWGyFV1dpzL4VVsRzlgKqueu6nRCQrgjS4AtxtdtzvXo28PaIWoDYMnMBGxFkbAw9F8hY8DbCEQK0bBBomIsaAHhpVgM09gE25MkxhthgOhu0f7Z36L3XEfEodrU/90ezq3oQd6/cH9UA5rXYo4L5QfBxXRvF3cucAiqe/4wAN7ETIbyddk+fVCYSbkOPk07zTqWfngsw1AAhoOgKKHwN4LC6pDEzVwRzQ8DClmi+OmwMTSzhXV1uUiAqrRABCe6RGxcQAiJbzMIpIGlrCrD9UDQ3NcB1NTfFExvkehoUGyx6ERQbLLoCxAZNfclxP7HBvNigqXDYFODaBYQAQwZEAaw1YMuLCo6nQUMBAJsCTANy3U8ISJcC8omMa8Wy4+m9G2QPxz2AEPDfJzLhLz7drxA34qzdeFvHsPbPEHfgXOMLAVzM7sq4ooBdWSmuOL8BtXGmbnZ07UgAAAAASUVORK5CYII="
        alt="date">
      </div>
      <div class="calendar">
        <div class="month">
          <ul>
            <li class="arrow year-pre">❮❮</li>
            <li class="arrow month-pre">❮</li>
            <li class="year-month">
              <span class="choose-year"></span>
              <span class="choose-month"></span>
            </li>
            <li class="arrow month-next">❯</li>
            <li class="arrow year-next">❯❯</li>
          </ul>
        </div>
        <ul class="weekdays">
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li style="color:red">六</li>
          <li style="color:red">日</li>
        </ul>
        <ul class="days">
        </ul>
      </div>
    </div>
  </div>`

}
