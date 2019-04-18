let html_code = `
<dl class="fa">
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">replace @mdn</a></dt>
</dl>
`;

let stripped = html_code.replace(/<.+?>/g, '');
console.log(stripped);