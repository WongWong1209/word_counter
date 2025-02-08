let text_area = document.querySelector('#text');
let text_length_text = document.querySelector('#text-length');

text_area.addEventListener('input', e => {
    let text = e.target.value.trim();
    let wordCount = text.length > 0 ? text.split(/\s+/).length : 0;

    text_length_text.innerHTML = `Word Count: ${wordCount}`;
});